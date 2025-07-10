# Деплоймент AdBrain Lab

## Автоматический деплоймент на Vercel

### 1. Подготовка к деплойменту

1. Убедитесь, что проект находится в GitHub репозитории
2. Перейдите на [vercel.com](https://vercel.com) и войдите через GitHub
3. Нажмите "New Project"
4. Выберите ваш репозиторий
5. Настройте проект:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Production Branch**: `real` (важно!)

### 2. Настройка переменных окружения

В настройках проекта Vercel добавьте следующие переменные окружения:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Настройка GitHub Secrets

Для работы CI/CD добавьте те же переменные в GitHub Secrets:

1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте каждую переменную как Repository secret

### 4. Continuous Deployment

После настройки:

- Каждый push в ветку `real` автоматически запустит деплоймент в production
- Ветка `main` будет использоваться только для разработки
- Pull requests будут проходить проверки CI/CD
- Деплоймент будет доступен по URL вида: `https://your-project.vercel.app`

## Ручной деплоймент

### Локальная сборка

```bash
cd apps/web
npm ci
npm run build
npm start
```

### Проверка перед деплойментом

```bash
npm run lint          # Проверка ESLint
npm run format:check  # Проверка форматирования
npm run type-check    # Проверка типов TypeScript
npm run build         # Сборка проекта
```

## Мониторинг

- **Vercel Dashboard**: Отслеживание деплойментов и производительности
- **GitHub Actions**: Логи CI/CD процессов
- **Firebase Console**: Мониторинг аутентификации и базы данных

## Ветки

- **`real`** - Production ветка (автоматический деплоймент)
- **`main`** - Development ветка (только CI/CD проверки)
