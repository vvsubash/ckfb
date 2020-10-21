FROM mhart/alpine-node:14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

COPY . .
EXPOSE 3000

RUN yarn build -m

CMD [ "yarn", "start" ]