FROM node:21
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../
#COPY . .
EXPOSE 3003
RUN chown -R node /usr/src/app
USER node
RUN npx prisma generate
CMD ["npm", "start"]
