# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

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
CMD ["npm", "start"]
