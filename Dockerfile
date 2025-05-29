
FROM node:20.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY src/config/firebase.json ./src/config/firebase.json

EXPOSE 3000
CMD ["node", "index.js"]
