FROM node:15
WORKDIR /app
COPY package.json .


RUN if [ "$NODE_ENV" = "development" ]; \
        then yarn install; \
        else yarn install --only:production; \
        fi

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "index.js"]