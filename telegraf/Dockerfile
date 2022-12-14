# Сборка для разработки

FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci
# npm install --platform=linuxmusl --arch=x64 sharp
# Пробую таким образом установить sharp 
# Детали ошибки во время сборки: Cannot find module '../build/Release/sharp-linuxmusl-x64.node' 
# RUN npm install --platform=linuxmusl --arch=x64 sharp

COPY --chown=node:node . .

USER node

# Сборка производственная

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

# Копирую каталог node_modules из образа разработки(development) в этот образ сборки.
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Команда сборки, которая создает производственный(production build)
RUN npm run build

# Установим переменную окружения NODE_ENV
ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

# Запуск производственной сборки

FROM node:18-alpine As production

# Скопирую связанный код со стадии сборки в рабочий образ
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Запуск сервера используя производственную сборку
CMD [ "node", "dist/main.js" ]

