FROM node

WORKDIR /app/backend

COPY . /app/backend

RUN yarn install
RUN apt update
RUN apt install colorized-logs -y
