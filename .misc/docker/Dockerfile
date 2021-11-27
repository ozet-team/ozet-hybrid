FROM node:16.13.0

LABEL maintainer="ozetteam@gmail.com"
LABEL title="web"
LABEL version="1.0"

# Install deps
RUN yarn
RUN yarn global add serve

# Init project
COPY . /app

WORKDIR /app

RUN yarn build

EXPOSE 3030

CMD serve -s build -p 3030
