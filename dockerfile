FROM node:18
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN ls -la
CMD yarn serve --host 0.0.0.0
EXPOSE 8080