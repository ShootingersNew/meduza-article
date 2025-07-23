# Nuxt + Module Federation Template

## Описание

Этот шаблон демонстрирует интеграцию Nuxt 3, пользовательского Nuxt-модуля и Webpack Module Federation для микрофронтендов.

## Структура
- `nuxt.config.ts` — конфигурация Nuxt с поддержкой Module Federation
- `modules/example.ts` — пример собственного Nuxt-модуля
- `components/ExampleComponent.vue` — компонент, экспортируемый через Module Federation
- `pages/index.vue` — пример использования компонента

## Быстрый старт

1. Установите зависимости:
   ```sh
   npm install
   ```
2. Запустите проект:
   ```sh
   npm run dev
   ```

## Примечания
- Для работы Module Federation потребуется корректная настройка Webpack и совместимость с Nuxt 3.
- Для реальных проектов настройте `remotes` и `exposes` в `ModuleFederationPlugin` под свои нужды.
