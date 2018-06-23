FROM node:10-alpine
WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY ./ /app/
ENV PORT=8080
EXPOSE $PORT
CMD ["yarn", "start"]
