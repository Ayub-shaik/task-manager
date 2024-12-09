# Use the official Node.js image.
FROM node:20

# Set the working directory for the app.
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies.
COPY package*.json ./

# Install app dependencies.
RUN npm install

# Copy the rest of the app's files into the container.
COPY . .

# Expose the app's port.
EXPOSE 3000

# Command to start the app.
CMD ["node", "index.js"]
