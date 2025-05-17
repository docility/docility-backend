# Use the official Node.js Alpine image as the base image
FROM node:23.11.1-alpine3.21

# Set the working directory in the container
WORKDIR /usr/src/app

# Install required build tools and Python for building native modules
RUN apk add --no-cache python3 g++ make

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the necessary dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Strapi application
RUN npm run build

# Expose the port that Strapi runs on
EXPOSE 1337

# Command to run the Strapi application
CMD ["npm", "run", "develop"]
