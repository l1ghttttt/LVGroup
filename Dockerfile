# Используем официальный образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё приложение
COPY . .

# Строим приложение
RUN npm run build

# Указываем порт, который будет слушать приложение
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
