ARG NODE_VERSION=16.15.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD npm start