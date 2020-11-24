# build state for building frontend assets

FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build


# nginx state for serving content

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#docker build -t yinglu91/proshop-frontend:1.0 -f Dockerfile .
#docker images
#docker run -p 80808:80 -d yinglu91/proshop-frontend:1.0
#docker ps
#curl -i localhost:80808