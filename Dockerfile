# 1. Используем официальный образ Node.js
FROM node:20-alpine AS builder

# 2. Устанавливаем рабочую директорию
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# 4. Устанавливаем зависимости
RUN npm ci

# 5. Копируем остальные файлы проекта
COPY . .

# 6. Собираем проект
RUN npm run build

# 7. Production образ — минимальный
FROM node:20-alpine AS runner

# 8. Устанавливаем рабочую директорию
WORKDIR /app

# 9. Только необходимые файлы
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/next.config.ts next.config.ts
COPY --from=builder /app/next-env.d.ts next-env.d.ts
COPY --from=builder /app/tsconfig.json tsconfig.json
COPY --from=builder /app/tailwind.config.ts tailwind.config.ts
COPY --from=builder /app/postcss.config.mjs postcss.config.mjs
COPY --from=builder /app/src src

# 10. Устанавливаем только production-зависимости
RUN npm install --omit=dev

# 11. Указываем порт
EXPOSE 3000

# 12. Запуск приложения
CMD ["npm", "run", "start"]
