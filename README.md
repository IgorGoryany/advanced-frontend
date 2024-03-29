## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Хапуск unit тестов с jest
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-ulbi-tv-plugin*,
который содержит 3 правила:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

Подробнее про [linting](docs/linting)

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `stylelint:scss` - Проверка scss файлов style линтером
- `stylelint:scss:fix` - Исправление scss файлов style линтером



----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](docs/storybook.md)

Пример story-файла:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib';
import { StoreDecorator, ThemeDecorator } from '@/shared/config';
import { Code } from './Code';

const meta = {
   title: 'shared/Code',
   component: Code,
   tags: ['autodocs'],
   args: {
      children: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
              + '\n'
              + 'import { Theme } from \'shared/lib\';\n'
              + 'import { StoreDecorator, ThemeDecorator } from \'shared/config\';\n'
              + 'import { Code } from \'./Code\';\n'
              + '\n'
              + 'const meta = {\n'
              + '    title: \'shared/Code\',\n'
              + '    component: Code,\n'
              + '    tags: [\'autodocs\'],',
   },
} as Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const Light: Story = {
   decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. production: Webpack - ./config/build
2. development: vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

Сборка:
- **[babel](config/babel)**
- **[webpack](config/build)** 

Тесты:
- [jest](config/jest) - конфигурация тестовой среды
- [storybook](config/storybook) - конфигурация сторибука
- [loki](package.json) - конфигурация для скриншот тестов

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

## Routing

Для работы с путями в прокте используется 
[React router DOM](https://reactrouter.com/en/main) 

Конфигурация роутера лежи в [src/app/providers/router](src/app/providers/router)

----


## Сущности (entities)

- [Article](src/entities/Article)
- [Comment](src/entities/Comment)
- [Counter](src/entities/Counter)
- [Country](src/entities/Country)
- [Currency](src/entities/Currency)
- [Notification](src/entities/Notification)
- [Profile](src/entities/Profile)
- [Rating](src/entities/Rating)
- [User](src/entities/User)

## Фичи (features)

- [addCommentForm](src/features/AddCommentForm)
- [articleRating](src/features/ArticleRating)
- [articleRecommendationsList](src/features/ArticleRecommendationList)
- [AuthByUsername](src/features/AuthByUsername)
- [avatarDropdown](src/features/AvatarDropdown)
- [editableProfileCard](src/features/EditableProfileCard)
- [LangSwitcher](src/features/LangSwitcher)
- [notificationButton](src/features/NotificationButton)
- [ThemeSwitcher](src/features/ThemeSwitcher)

## Виджеты (widgets)

- [Navbar](src/widgets/Navbar)
- [PageError](src/widgets/PageError)
- [PageLayout](src/widgets/PageLayout)
- [PageLoader](src/widgets/PageLoader)
- [Sidebar](src/widgets/Sidebar)

## Страницы (pages)

- [AboutPage](src/pages/AboutPage)
- [AdminPanelPage](src/pages/AdminPanelPage)
- [ArticleDetailsPage](src/pages/ArticleDetailsPage)
- [ArticlePage](src/pages/ArticlePage)
- [ForbiddenPage](src/pages/ForbiddenPage)
- [MainPage](src/pages/MainPage)
- [NotFoundPage](src/pages/NotFoundPage)
- [ProfilePage](src/pages/ProfilePage)


## Shared слой

- В проекте используется кстомная [UI библиотека](src/shared/ui), 
а также стороняя библиотека [HeadlessUI](https://headlessui.com). Все UI компоненты лежат в /src/shared/ui. 
Документация по каждому компоненту находитя рядом с компонентом \*componentName\*.md
- Все ассеты находятся в /src/shared/assets: [assets](src/shared/assets).
- Все вспомогательные инструменты для тестирования и 
разработки, например хуки, контексты, 
оберткки или хелперы для тестирования, 
находятся в /src/shared/lib: [lib](src/shared/lib).
- В папке [config](src/shared/config) находятся конфигурационые файлы для тестов, 
- storybook`a и функции геттеры для работы с роутингом.
