FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY statuscode0_backend ./
RUN ls -l
CMD ["npm", "run", "prod"]