FROM node
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD npm start