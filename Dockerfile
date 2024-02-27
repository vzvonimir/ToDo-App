FROM node:18.17.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm@latest
COPY . .
EXPOSE 3000
CMD ["npm", "start"]