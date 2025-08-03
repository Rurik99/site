from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional, Union
from datetime import datetime
import uuid

# Course Module Model
class CourseModule(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    duration: str
    lessons: int
    accent: str
    order: int
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Course Benefits Model  
class CourseBenefit(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    icon: str
    order: int
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Instructor Model
class Instructor(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    title: str
    experience: str
    students_count: str
    bio: str
    credentials: List[str]
    avatar_url: Optional[str] = None
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Testimonial Model
class Testimonial(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    rating: int = Field(ge=1, le=5)
    text: str
    date_text: str
    is_featured: bool = True
    is_approved: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# FAQ Model
class FAQItem(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    order: int
    category: Optional[str] = None
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Student Registration Models
class StudentRegistrationRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)

class StudentRegistration(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    registration_date: datetime = Field(default_factory=datetime.utcnow)
    source: str = "landing_page"
    status: str = "pending"
    email_sent: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

class StudentRegistrationResponse(BaseModel):
    success: bool
    message: str
    student_id: Optional[str] = None
    registration_date: Optional[datetime] = None
    next_steps: List[str]

# Course Settings Model
class CourseSetting(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    key: str
    value: Union[str, int, float]
    description: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Response Models
class CourseInfoResponse(BaseModel):
    modules: List[CourseModule]
    benefits: List[CourseBenefit]
    instructor: Instructor
    faq: List[FAQItem]
    registration_benefits: List[str]
    stats: dict

class TestimonialsResponse(BaseModel):
    testimonials: List[Testimonial]

class RegistrationStatsResponse(BaseModel):
    total_registrations: int
    registrations_today: int
    registrations_this_week: int  
    registrations_this_month: int