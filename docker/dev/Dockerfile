FROM nginx:mainline-alpine3.18-slim
WORKDIR /web/app
COPY build/ .
COPY react.conf /etc/nginx/conf.d/default.conf
