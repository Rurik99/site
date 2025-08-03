# API Контракты - WordPress Course Landing Page

## Общий обзор
Данный документ описывает API контракты для интеграции фронтенда с бэкендом лендинга курса WordPress. В настоящее время фронтенд использует моковые данные из `/src/data/mock.js`, которые нужно заменить на реальные API вызовы.

## Текущее состояние Mock данных

### Файл: `/src/data/mock.js` содержит:
1. **courseModules** - 6 модулей курса с описаниями
2. **benefits** - 4 преимущества курса  
3. **instructor** - информация об инструкторе
4. **testimonials** - 4 отзыва студентов
5. **faqItems** - 6 часто задаваемых вопросов
6. **registrationBenefits** - список преимуществ регистрации

### Текущая функциональность фронтенда:
- **Регистрация студентов**: сохранение в `localStorage.wpCourseRegistrations`
- **Статичные данные**: все остальные данные загружаются из mock.js при рендере компонентов

---

## Backend API Endpoints

### 1. Управление курсом

#### GET `/api/course-info`
**Назначение**: Получение полной информации о курсе
**Ответ**:
```json
{
  "modules": [
    {
      "id": 1,
      "title": "Основы WordPress и установка",
      "description": "Изучите, как установить WordPress...",
      "duration": "45 минут",
      "lessons": 8,
      "accent": "accent-purple",
      "order": 1
    }
  ],
  "benefits": [
    {
      "id": 1,
      "title": "Начинаем с нуля",
      "description": "Никакого предыдущего опыта не требуется...",
      "icon": "play"
    }
  ],
  "instructor": {
    "name": "Анна Петрова",
    "title": "Эксперт WordPress и веб-разработчик",
    "experience": "8+ лет",
    "students": "15 000+",
    "bio": "Анна - профессиональный веб-разработчик...",
    "credentials": ["Сертифицированный WordPress разработчик", ...]
  },
  "faq": [
    {
      "id": 1,
      "question": "Нужен ли мне предыдущий опыт работы с WordPress?",
      "answer": "Совсем не нужен!...",
      "order": 1
    }
  ],
  "registration_benefits": [
    "12+ часов пошагового видео контента",
    ...
  ],
  "stats": {
    "total_students": 2500,
    "rating": 4.9,
    "completion_rate": 98
  }
}
```

### 2. Управление отзывами

#### GET `/api/testimonials`
**Назначение**: Получение отзывов студентов
**Ответ**:
```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Михаил Иванов",
      "role": "Владелец малого бизнеса",
      "rating": 5,
      "text": "Этот курс кардинально изменил...",
      "date": "2 недели назад",
      "is_featured": true,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### 3. Регистрация студентов

#### POST `/api/student-registration`
**Назначение**: Регистрация нового студента
**Запрос**:
```json
{
  "name": "Иван Петров",
  "email": "ivan.petrov@example.com", 
  "phone": "+7 (916) 123-45-67" // опционально
}
```

**Ответ успеха (201)**:
```json
{
  "success": true,
  "message": "Регистрация прошла успешно",
  "student_id": "64a7f8b9c123456789abcdef",
  "registration_date": "2024-01-20T15:45:00Z",
  "next_steps": [
    "Проверьте почту для получения ссылки доступа к курсу",
    "Создайте свой студенческий аккаунт", 
    "Начните с Модуля 1: Основы WordPress"
  ]
}
```

**Ответ ошибки (400)**:
```json
{
  "success": false,
  "message": "Email уже зарегистрирован",
  "error_code": "DUPLICATE_EMAIL"
}
```

#### GET `/api/student-registrations/stats`
**Назначение**: Получение статистики регистраций (для админа)
**Ответ**:
```json
{
  "total_registrations": 2543,
  "registrations_today": 12,
  "registrations_this_week": 89,
  "registrations_this_month": 356
}
```

---

## MongoDB Схемы данных

### Collection: `course_modules`
```javascript
{
  _id: ObjectId,
  title: String, // "Основы WordPress и установка"
  description: String,
  duration: String, // "45 минут"
  lessons: Number, // 8
  accent: String, // "accent-purple" 
  order: Number, // порядок отображения
  is_active: Boolean, // активен ли модуль
  created_at: Date,
  updated_at: Date
}
```

### Collection: `course_benefits`
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon: String, // "play", "code", etc.
  order: Number,
  is_active: Boolean,
  created_at: Date
}
```

### Collection: `instructor`
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  experience: String,
  students_count: String, // "15 000+"
  bio: String,
  credentials: [String],
  avatar_url: String, // опционально
  is_active: Boolean,
  created_at: Date,
  updated_at: Date
}
```

### Collection: `testimonials`
```javascript
{
  _id: ObjectId,
  name: String,
  role: String,
  rating: Number, // 1-5
  text: String,
  date_text: String, // "2 недели назад"
  is_featured: Boolean,
  is_approved: Boolean,
  created_at: Date
}
```

### Collection: `faq_items`
```javascript
{
  _id: ObjectId,
  question: String,
  answer: String,
  order: Number,
  category: String, // опционально
  is_active: Boolean,
  created_at: Date
}
```

### Collection: `student_registrations`
```javascript
{
  _id: ObjectId,
  name: String,
  email: String, // unique index
  phone: String, // опционально
  registration_date: Date,
  source: String, // "landing_page"
  status: String, // "pending", "confirmed", "enrolled"
  email_sent: Boolean, // отправлено ли письмо
  created_at: Date
}
```

### Collection: `course_settings`
```javascript
{
  _id: ObjectId,
  key: String, // "total_students", "rating", "completion_rate"
  value: Mixed, // 2500, 4.9, 98
  description: String,
  updated_at: Date
}
```

---

## Frontend Integration Plan

### Изменения в компонентах:

#### 1. `HomePage.jsx`
- Добавить `useEffect` для загрузки данных курса при монтировании
- Создать состояния для хранения данных из API
- Добавить loading states

#### 2. `CourseOverview.jsx`
```javascript
// Заменить:
import { courseModules } from '../data/mock';

// На:
const [courseModules, setCourseModules] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchCourseInfo();
}, []);

const fetchCourseInfo = async () => {
  try {
    const response = await axios.get(`${API}/course-info`);
    setCourseModules(response.data.modules);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching course info:', error);
  }
};
```

#### 3. `Registration.jsx`
```javascript
// Заменить localStorage логику на:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/student-registration`, formData);
    if (response.data.success) {
      setIsSubmitted(true);
      setSuccessMessage(response.data);
    }
  } catch (error) {
    setError(error.response.data.message);
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 4. `Testimonials.jsx`
```javascript
// Добавить загрузку отзывов:
const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  fetchTestimonials();
}, []);

const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API}/testimonials`);
    setTestimonials(response.data.testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }
};
```

---

## Последовательность реализации

### Этап 1: Базовые модели и эндпоинты
1. Создать MongoDB модели для всех коллекций
2. Реализовать `GET /api/course-info` endpoint
3. Наполнить базу данными из mock.js
4. Протестировать получение данных

### Этап 2: Регистрация студентов
1. Реализовать `POST /api/student-registration`
2. Добавить валидацию email (проверка на дубликаты)
3. Интегрировать с фронтендом
4. Протестировать полный flow регистрации

### Этап 3: Отзывы и статистика
1. Реализовать `GET /api/testimonials`
2. Добавить эндпоинт для статистики
3. Обновить фронтенд для динамической загрузки

### Этап 4: Тестирование и отладка
1. Полное тестирование всех эндпоинтов
2. Проверка интеграции фронтенд-бэкенд
3. Тестирование обработки ошибок

---

## Обработка ошибок

### Backend errors:
- 400: Валидационные ошибки
- 404: Данные не найдены  
- 409: Конфликт (дубликат email)
- 500: Внутренние ошибки сервера

### Frontend error handling:
- Показ toast уведомлений об ошибках
- Graceful fallback на моковые данные при недоступности API
- Loading states для всех асинхронных операций

---

## Файлы для удаления после интеграции
- `/src/data/mock.js` (после полной интеграции)
- Все импорты mock данных из компонентов

## Файлы для изменения
- Все компоненты, использующие данные из mock.js
- Добавить новые хуки для API вызовов
- Обновить обработку состояний загрузки