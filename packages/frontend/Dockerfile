FROM node:17-alpine as build

WORKDIR /var/www/frontend

COPY . .

RUN npm install

CMD ["npm", "run", "start"]