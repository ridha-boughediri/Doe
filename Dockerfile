FROM node:14.16.0-alpine3.13

WORKDIR /expo_reactnative

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD [ "npx", "expo", "start" ]




