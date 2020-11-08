FROM node:10.19.0-alpine
RUN mkdir -p /srv/rushing-app/client
WORKDIR /srv/rushing-app/client
COPY package.json /srv/rushing-app/client
COPY package-lock.json /srv/rushing-app/client
RUN npm install
COPY . /srv/rushing-app/client
CMD ["npm", "start"]

