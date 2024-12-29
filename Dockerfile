FROM node:22
# /app is related to deployment not for backend
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "index"]