# pull the official base image
FROM node:16.14-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
RUN npm install -g npm@8.5.1
RUN npm i --legacy-peer-deps
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]
