# Use the official Node.js image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the application port (change 3000 to your app’s port if different)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
