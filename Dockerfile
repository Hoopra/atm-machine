FROM node:13-alpine AS dev
LABEL maintainer="hoopra12@gmail.com"

ENV HOME=/home/app
WORKDIR $HOME

COPY . $HOME/

CMD ["npm", "run", "dev"]

FROM dev as prod

RUN npm install && npm run build

RUN npm prune --production --loglevel=error

CMD ["npm", "run", "start"]
