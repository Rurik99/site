from database import (
    course_modules_collection, course_benefits_collection, 
    instructor_collection, testimonials_collection, 
    faq_collection, settings_collection
)
from datetime import datetime

# Данные курса для заполнения базы данных
COURSE_MODULES_DATA = [
    {
        "id": "1",
        "title": "Основы WordPress и установка",
        "description": "Изучите, как установить WordPress, разберитесь с панелью управления и создайте свою первую запись. Идеальная отправная точка для новичков.",
        "duration": "45 минут",
        "lessons": 8,
        "accent": "accent-purple",
        "order": 1,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": "2", 
        "title": "Темы и кастомизация",
        "description": "Освойте WordPress темы, настройте внешний вид сайта и создайте уникальный дизайн, представляющий ваш бренд.",
        "duration": "1,2 часа",
        "lessons": 12,
        "accent": "accent-blue",
        "order": 2,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": "3",
        "title": "Создание контента",
        "description": "Создавайте увлекательные посты, страницы, медиа-галереи и организовывайте контент как профессионал.",
        "duration": "1 час",
        "lessons": 10,
        "accent": "accent-orange",
        "order": 3,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": "4",
        "title": "Плагины и функциональность",
        "description": "Расширьте возможности WordPress с помощью необходимых плагинов для SEO, безопасности, производительности и многого другого.",
        "duration": "1,5 часа",
        "lessons": 14,
        "accent": "accent-pink",
        "order": 4,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": "5",
        "title": "SEO и производительность",
        "description": "Оптимизируйте свой WordPress сайт для поисковых систем и улучшите скорость загрузки для лучшего пользовательского опыта.",
        "duration": "1 час",
        "lessons": 9,
        "accent": "accent-green",
        "order": 5,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "id": "6",
        "title": "Безопасность и обслуживание",
        "description": "Защитите свой WordPress сайт от угроз и поддерживайте его для оптимальной производительности.",
        "duration": "45 минут",
        "lessons": 7,
        "accent": "accent-grey",
        "order": 6,
        "is_active": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

COURSE_BENEFITS_DATA = [
    {
        "id": "1",
        "title": "Начинаем с нуля",
        "description": "Никакого предыдущего опыта не требуется. Мы начинаем с самых основ и систематически развиваем ваши навыки.",
        "icon": "play",
        "order": 1,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "2",
        "title": "Практическое обучение",
        "description": "Создавайте реальные сайты в процессе обучения. Каждый модуль включает практические упражнения и реальные проекты.",
        "icon": "code",
        "order": 2,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "3",
        "title": "Пожизненный доступ",
        "description": "После регистрации получите доступ к курсу навсегда. Учитесь в своем темпе и пересматривайте уроки в любое время.",
        "icon": "infinity",
        "order": 3,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "4",
        "title": "Поддержка экспертов",
        "description": "Получайте помощь, когда она вам нужна. Наш инструктор и сообщество готовы поддержать ваше обучение.",
        "icon": "help-circle",
        "order": 4,
        "is_active": True,
        "created_at": datetime.utcnow()
    }
]

INSTRUCTOR_DATA = {
    "id": "instructor_1",
    "name": "Анна Петрова",
    "title": "Эксперт WordPress и веб-разработчик",
    "experience": "8+ лет",
    "students_count": "15 000+",
    "bio": "Анна - профессиональный веб-разработчик, работающий с WordPress с 2015 года. Она создала более 200 сайтов для клиентов от малого бизнеса до крупных корпораций. Анна увлечена преподаванием и помогла тысячам студентов освоить WordPress благодаря своему четкому пошаговому подходу к обучению.",
    "credentials": [
        "Сертифицированный WordPress разработчик",
        "Сертификат Google Analytics",
        "Сертификат Yoast SEO",
        "8+ лет профессионального опыта"
    ],
    "is_active": True,
    "created_at": datetime.utcnow(),
    "updated_at": datetime.utcnow()
}

TESTIMONIALS_DATA = [
    {
        "id": "1",
        "name": "Михаил Иванов",
        "role": "Владелец малого бизнеса",
        "rating": 5,
        "text": "Этот курс кардинально изменил мое понимание WordPress. Я перешел от полного незнания к созданию сайта для своего бизнеса всего за 2 недели. Стиль преподавания Анны невероятно понятен и легок для восприятия.",
        "date_text": "2 недели назад",
        "is_featured": True,
        "is_approved": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "2",
        "name": "Елена Васильева", 
        "role": "Фриланс дизайнер",
        "rating": 5,
        "text": "Как дизайнер, избегавший технической стороны, этот курс сделал WordPress доступным. Теперь я могу предлагать клиентам полные веб-решения, а не только дизайн.",
        "date_text": "1 месяц назад",
        "is_featured": True,
        "is_approved": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "3", 
        "name": "Дмитрий Козлов",
        "role": "Менеджер по маркетингу",
        "rating": 5,
        "text": "Идеально для новичков! Пошаговый подход помог мне создать корпоративный блог с нуля. Одного только раздела по SEO стоил всей стоимости курса.",
        "date_text": "3 недели назад",
        "is_featured": True,
        "is_approved": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "4",
        "name": "Ольга Смирнова",
        "role": "Предприниматель", 
        "rating": 5,
        "text": "Я прошла много онлайн-курсов, но этот выделяется среди других. Практические проекты закрепили знания, и теперь я уверенно управляю своим WordPress сайтом.",
        "date_text": "1 неделю назад",
        "is_featured": True,
        "is_approved": True,
        "created_at": datetime.utcnow()
    }
]

FAQ_DATA = [
    {
        "id": "1",
        "question": "Нужен ли мне предыдущий опыт работы с WordPress?",
        "answer": "Совсем не нужен! Этот курс создан специально для полных новичков. Мы начинаем с самых основ - что такое WordPress, как его установить, и постепенно развиваем ваши навыки. К концу курса вы будете уверенно создавать и управлять профессиональными сайтами.",
        "order": 1,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "2",
        "question": "Что мне нужно для начала обучения?",
        "answer": "Все, что вам нужно - это компьютер с доступом к интернету и желание учиться. Мы покажем, как настроить все остальное, включая хостинг, доменные имена и установку WordPress. Курс включает рекомендации по бесплатным и платным инструментам.",
        "order": 2,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "3",
        "question": "Сколько времени займет прохождение курса?",
        "answer": "Курс содержит более 12 часов контента, но вы можете учиться в своем темпе. Большинство студентов завершают его за 2-4 недели, уделяя 1-2 часа в день. Помните, у вас пожизненный доступ, так что никуда не торопитесь!",
        "order": 3,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "4",
        "question": "Смогу ли я создавать профессиональные сайты после этого курса?",
        "answer": "Абсолютно! К концу курса у вас будут навыки для создания профессиональных WordPress сайтов. Вы поймете темы, плагины, SEO, безопасность и все основные элементы, необходимые для создания впечатляющих сайтов для себя или клиентов.",
        "order": 4,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "5",
        "question": "Есть ли поддержка после завершения курса?",
        "answer": "Да! У вас будет доступ к нашему закрытому студенческому сообществу, где вы можете задавать вопросы, делиться своими работами и получать обратную связь. Кроме того, содержание курса регулярно обновляется новыми техниками и обновлениями WordPress.",
        "order": 5,
        "is_active": True,
        "created_at": datetime.utcnow()
    },
    {
        "id": "6",
        "question": "Смогу ли я создавать интернет-магазины с полученными знаниями?",
        "answer": "Курс охватывает основы, которые понадобятся вам для любого типа WordPress сайта. Хотя мы затрагиваем основы электронной коммерции, этот курс фокусируется на стандартных сайтах. Однако полученные навыки подготовят вас к изучению электронной коммерции в будущем.",
        "order": 6,
        "is_active": True,
        "created_at": datetime.utcnow()
    }
]

SETTINGS_DATA = [
    {"key": "total_students", "value": 2500, "description": "Общее количество студентов"},
    {"key": "rating", "value": 4.9, "description": "Средний рейтинг курса"},
    {"key": "completion_rate", "value": 98, "description": "Процент завершения курса"}
]

async def seed_database():
    """Заполнить базу данных начальными данными"""
    
    # Очистить существующие данные
    await course_modules_collection.delete_many({})
    await course_benefits_collection.delete_many({})
    await instructor_collection.delete_many({})
    await testimonials_collection.delete_many({})
    await faq_collection.delete_many({})
    await settings_collection.delete_many({})
    
    # Заполнить данными
    await course_modules_collection.insert_many(COURSE_MODULES_DATA)
    await course_benefits_collection.insert_many(COURSE_BENEFITS_DATA)
    await instructor_collection.insert_one(INSTRUCTOR_DATA)
    await testimonials_collection.insert_many(TESTIMONIALS_DATA)
    await faq_collection.insert_many(FAQ_DATA)
    
    # Добавить настройки
    for setting in SETTINGS_DATA:
        await settings_collection.insert_one({
            **setting,
            "updated_at": datetime.utcnow()
        })
    
    print("✅ База данных заполнена начальными данными!")

if __name__ == "__main__":
    import asyncio
    asyncio.run(seed_database())