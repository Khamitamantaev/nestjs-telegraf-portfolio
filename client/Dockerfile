FROM node:18-alpine as development
WORKDIR /usr/src/app
COPY  package*.json ./
RUN npm install
COPY . .

FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build
RUN npm install -g serve