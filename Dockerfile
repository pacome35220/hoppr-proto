
FROM node:12.1.0

LABEL maintainer="Marco Gautier <marco.gautier@epitech.eu>"

RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
RUN npm install --verbose
RUN npm install -g @angular/cli@8.3.3
ENV NODE_PATH=/app/node_modules/.bin

COPY . /app/

CMD ng serve
