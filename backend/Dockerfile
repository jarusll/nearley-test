FROM node

WORKDIR /app/backend

COPY ./package.json .

RUN yarn install
RUN npm i -g nearley
RUN apt update
RUN apt install colorized-logs -y
