# :latest tag using by default, but prefer to use it explicitly
FROM mhart/alpine-node:latest
WORKDIR /docker-for-fun/you-shell-not-pass
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
RUN yarn global add serve
WORKDIR /docker-for-fun/you-shell-not-pass
CMD ["serve", "-p", "80", "-s", "./build"]
