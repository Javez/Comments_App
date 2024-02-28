FROM node:latest

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

COPY src ./src
RUN ls -a
RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "prod"]
