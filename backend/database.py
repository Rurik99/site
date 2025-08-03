from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
from typing import List, Optional
import os
from models import (
    CourseModule, CourseBenefit, Instructor, Testimonial, 
    FAQItem, StudentRegistration, CourseSetting
)

# MongoDB connection setup
mongo_url = os.environ['MONGO_URL'] 
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
course_modules_collection = db.course_modules
course_benefits_collection = db.course_benefits
instructor_collection = db.instructor
testimonials_collection = db.testimonials
faq_collection = db.faq_items
registrations_collection = db.student_registrations
settings_collection = db.course_settings

class DatabaseManager:
    
    # Course Information Methods
    @staticmethod
    async def get_course_modules() -> List[dict]:
        modules = await course_modules_collection.find(
            {"is_active": True}
        ).sort("order", 1).to_list(None)
        return modules

    @staticmethod
    async def get_course_benefits() -> List[dict]:
        benefits = await course_benefits_collection.find(
            {"is_active": True}
        ).sort("order", 1).to_list(None)
        return benefits

    @staticmethod
    async def get_instructor() -> Optional[dict]:
        instructor = await instructor_collection.find_one({"is_active": True})
        return instructor

    @staticmethod
    async def get_faq_items() -> List[dict]:
        faq = await faq_collection.find(
            {"is_active": True}
        ).sort("order", 1).to_list(None)
        return faq

    @staticmethod
    async def get_course_stats() -> dict:
        total_students = await DatabaseManager.get_setting("total_students", 2500)
        rating = await DatabaseManager.get_setting("rating", 4.9)
        completion_rate = await DatabaseManager.get_setting("completion_rate", 98)
        
        return {
            "total_students": total_students,
            "rating": rating,
            "completion_rate": completion_rate
        }

    # Testimonials Methods
    @staticmethod
    async def get_testimonials() -> List[dict]:
        testimonials = await testimonials_collection.find(
            {"is_approved": True, "is_featured": True}
        ).sort("created_at", -1).to_list(None)
        return testimonials

    # Student Registration Methods
    @staticmethod
    async def create_student_registration(registration_data: dict) -> str:
        # Check if email already exists
        existing = await registrations_collection.find_one({"email": registration_data["email"]})
        if existing:
            raise ValueError("Email уже зарегистрирован")
        
        result = await registrations_collection.insert_one(registration_data)
        return str(result.inserted_id)

    @staticmethod
    async def get_student_by_email(email: str) -> Optional[dict]:
        return await registrations_collection.find_one({"email": email})

    @staticmethod
    async def get_registration_stats() -> dict:
        total = await registrations_collection.count_documents({})
        
        # Today's registrations
        today_start = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
        today = await registrations_collection.count_documents({
            "created_at": {"$gte": today_start}
        })
        
        # This week's registrations
        week_start = today_start - timedelta(days=today_start.weekday())
        this_week = await registrations_collection.count_documents({
            "created_at": {"$gte": week_start}
        })
        
        # This month's registrations  
        month_start = today_start.replace(day=1)
        this_month = await registrations_collection.count_documents({
            "created_at": {"$gte": month_start}
        })
        
        return {
            "total_registrations": total,
            "registrations_today": today, 
            "registrations_this_week": this_week,
            "registrations_this_month": this_month
        }

    # Settings Methods
    @staticmethod
    async def get_setting(key: str, default_value=None):
        setting = await settings_collection.find_one({"key": key})
        return setting["value"] if setting else default_value

    @staticmethod
    async def update_setting(key: str, value, description: str):
        await settings_collection.update_one(
            {"key": key},
            {
                "$set": {
                    "value": value,
                    "description": description,
                    "updated_at": datetime.utcnow()
                }
            },
            upsert=True
        )

    # Registration Benefits (static data for now)
    @staticmethod
    def get_registration_benefits() -> List[str]:
        return [
            "12+ часов пошагового видео контента",
            "6 всесторонних модулей, охватывающих все",
            "Практические проекты и реальные упражнения", 
            "Пожизненный доступ ко всем материалам курса",
            "Доступ к закрытому студенческому сообществу",
            "Регулярные обновления курса и новый контент",
            "30-дневная гарантия возврата денег",
            "Сертификат о завершении курса"
        ]