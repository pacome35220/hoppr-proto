FROM node:12.1.0

LABEL maintainer="Marco Gautier <marco.gautier@epitech.eu>"

RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
RUN npm install
ENV NODE_PATH=/app/node_modules

COPY . /app

CMD [ "npm", "run", "server" ]
