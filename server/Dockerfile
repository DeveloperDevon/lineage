FROM node:18.18.2

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install typescript -g

COPY . .

RUN tsc

EXPOSE 3001

CMD [ "node", "dist/index.js" ]