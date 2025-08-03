from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ValidationError
from typing import List
import uuid
from datetime import datetime

# Import our models and database
from models import (
    CourseInfoResponse, TestimonialsResponse, RegistrationStatsResponse,
    StudentRegistrationRequest, StudentRegistrationResponse
)
from database import DatabaseManager

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="WordPress Course API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Original status check models (keeping for compatibility)
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# ===== WORDPRESS COURSE API ENDPOINTS =====

@api_router.get("/course-info")
async def get_course_info():
    """Получить полную информацию о курсе"""
    try:
        # Получить все компоненты курса
        modules = await DatabaseManager.get_course_modules()
        benefits = await DatabaseManager.get_course_benefits()
        instructor = await DatabaseManager.get_instructor()
        faq = await DatabaseManager.get_faq_items()
        stats = await DatabaseManager.get_course_stats()
        registration_benefits = DatabaseManager.get_registration_benefits()
        
        if not instructor:
            raise HTTPException(status_code=404, detail="Информация об инструкторе не найдена")
            
        return {
            "modules": modules,
            "benefits": benefits,
            "instructor": instructor,
            "faq": faq,
            "registration_benefits": registration_benefits,
            "stats": stats
        }
        
    except Exception as e:
        logger.error(f"Ошибка при получении информации о курсе: {str(e)}")
        raise HTTPException(status_code=500, detail="Внутренняя ошибка сервера")

@api_router.get("/testimonials")
async def get_testimonials():
    """Получить отзывы студентов"""
    try:
        testimonials = await DatabaseManager.get_testimonials()
        return {"testimonials": testimonials}
        
    except Exception as e:
        logger.error(f"Ошибка при получении отзывов: {str(e)}")
        raise HTTPException(status_code=500, detail="Внутренняя ошибка сервера")

@api_router.post("/student-registration")
async def register_student(registration: StudentRegistrationRequest):
    """Регистрация нового студента"""
    try:
        # Подготовить данные для сохранения
        registration_data = {
            "id": str(uuid.uuid4()),
            "name": registration.name,
            "email": registration.email,
            "phone": registration.phone,
            "registration_date": datetime.utcnow(),
            "source": "landing_page",
            "status": "pending",
            "email_sent": False,
            "created_at": datetime.utcnow()
        }
        
        # Создать регистрацию в базе данных
        student_id = await DatabaseManager.create_student_registration(registration_data)
        
        # Подготовить ответ
        next_steps = [
            "Проверьте почту для получения ссылки доступа к курсу",
            "Создайте свой студенческий аккаунт",
            "Начните с Модуля 1: Основы WordPress"
        ]
        
        return {
            "success": True,
            "message": "Регистрация прошла успешно",
            "student_id": student_id,
            "registration_date": registration_data["registration_date"],
            "next_steps": next_steps
        }
        
    except ValueError as ve:
        # Дубликат email
        raise HTTPException(
            status_code=409, 
            detail={
                "success": False,
                "message": str(ve),
                "error_code": "DUPLICATE_EMAIL"
            }
        )
        
    except ValidationError as ve:
        raise HTTPException(
            status_code=400,
            detail={
                "success": False, 
                "message": "Некорректные данные",
                "errors": ve.errors()
            }
        )
        
    except Exception as e:
        logger.error(f"Ошибка при регистрации студента: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail={
                "success": False,
                "message": "Внутренняя ошибка сервера"
            }
        )

@api_router.get("/student-registrations/stats")
async def get_registration_stats():
    """Получить статистику регистраций (для администратора)"""
    try:
        stats = await DatabaseManager.get_registration_stats()
        return stats
        
    except Exception as e:
        logger.error(f"Ошибка при получении статистики: {str(e)}")
        raise HTTPException(status_code=500, detail="Внутренняя ошибка сервера")

# ===== ORIGINAL STATUS CHECK ENDPOINTS (keeping for compatibility) =====

@api_router.get("/")
async def root():
    return {"message": "WordPress Course API - Ready!"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# ===== UTILITY ENDPOINT =====

@api_router.post("/seed-database")
async def seed_database():
    """Заполнить базу данных тестовыми данными (только для разработки)"""
    try:
        from seed_data import seed_database
        await seed_database()
        return {"message": "База данных заполнена начальными данными!"}
        
    except Exception as e:
        logger.error(f"Ошибка при заполнении базы данных: {str(e)}")
        raise HTTPException(status_code=500, detail="Ошибка при заполнении базы данных")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
