# Use official Node.js image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all API source code
COPY . .

# Expose API port
EXPOSE 3000

# Run the API
CMD ["node", "api.js"]
