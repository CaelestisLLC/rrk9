# pull official base image
# TODO maintain a base image we control
FROM nginx:1.17.10-alpine AS node_image
LABEL maintainer="verbalwebsites@gmail.com"

RUN apk add --update nodejs nodejs-npm
RUN npm install -g serve

COPY ./util/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./util/server.crt /etc/nginx/ssl/server.crt
COPY ./util/server.key /etc/nginx/ssl/server.key

FROM node_image AS rrk9_store
# set working directory
WORKDIR /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/api/node_modules/.bin:$PATH

# install app dependencies

# add app
RUN mkdir -p /app/api

COPY ./node/ /app/api/
COPY ./react/build /app/react/
COPY ./util/run.sh /app/

# start app
EXPOSE 443
CMD ["/app/run.sh"]
