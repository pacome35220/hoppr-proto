FROM node:12.1.0 as build

LABEL maintainer="Marco Gautier <marco.gautier@epitech.eu>"

RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
RUN npm install
RUN npm install -g @angular/cli@8.3.3
ENV NODE_PATH=/app/node_modules

COPY . /app

RUN ng build --prod
CMD [ "npm", "run", "server;" ]

FROM nginx:1.16.0-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./dev/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/hoppr-proto /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
