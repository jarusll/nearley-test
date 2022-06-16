FROM node

WORKDIR /app/backend

COPY ./package.json .

RUN yarn install
RUN apt update
RUN apt install colorized-logs -y
