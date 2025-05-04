# Use the official Node.js image as the base image
FROM node:23.11.0-alpine3.21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
RUN apt-get update && apt-get install -y python3 g++ make
# Install the necessary dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Strapi application
RUN npm run build

# Set environment variables (if needed)  
# ENV NODE_ENV production   
     
# Expose the port that Strapi runs on
EXPOSE 1337    

# Command to run the Strapi application
CMD ["npm", "run","develop"]
