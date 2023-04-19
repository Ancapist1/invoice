FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

RUN npm run build

CMD node dist/app.js