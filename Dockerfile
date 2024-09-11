# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.12.0
ARG PNPM_VERSION=8.1.1

FROM node:${NODE_VERSION}-alpine

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

EXPOSE 4000
