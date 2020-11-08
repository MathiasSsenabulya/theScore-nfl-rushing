FROM node:10.19.0-alpine
RUN mkdir -p /srv/rushing-app/api
WORKDIR /srv/rushing-app/api
COPY package.json /srv/rushing-app/api
COPY package-lock.json /srv/rushing-app/api
RUN npm install
COPY . /srv/rushing-app/api
CMD ["npm","run","dev"]

