FROM node:20.2-slim

COPY . /app
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install
RUN yarn upgrade
CMD ["yarn", "dev"]
