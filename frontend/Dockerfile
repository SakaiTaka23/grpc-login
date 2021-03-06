FROM node:15.13.0-alpine3.10 as base

WORKDIR /app/js/base

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install
COPY . .

FROM node:15.13.0-alpine3.10 as builder

ENV NODE_ENV=production
WORKDIR /app/js/builder

COPY --from=base /app/js/base /app/js/builder
RUN ["yarn", "build"]

FROM node:15.13.0-alpine3.10 as production

ENV NODE_ENV=production
WORKDIR /app/js/src

COPY --from=builder /app/js/builder/package.json /app/js/builder/yarn.lock ./
COPY --from=builder /app/js/builder/.next ./.next
COPY --from=builder /app/js/builder/public ./public
RUN ["yarn", "install", "--production"]

EXPOSE 3000

CMD [ "yarn", "start" ]
