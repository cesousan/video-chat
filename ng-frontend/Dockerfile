# Stage 0, based on Node.js, to build and compile Angular
FROM node:10-alpine as node
WORKDIR /app
COPY package.json /app/
RUN yarn
COPY ./ /app/
ARG conf=production
RUN yarn run build --prod --configuration=$conf

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15-alpine
COPY --from=node /app/dist/ng-frontend /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf


# run following commands to manually build and run the image -->
# I) BUILD :
# docker build -t video-chat-frontend:prod .
# OR FOR DEV BUILD :
# docker build -t video-chat-frontend:dev --build-arg env=dev .
# II) RUN :
# docker run -p 80:80 video-chat-frontend:prod
