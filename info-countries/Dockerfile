# Stage 1: build
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vue project (output in /app/dist)
RUN npm run build

# Stage 2: Nginx server to serve the built files
FROM nginx:stable

# Copy the Vue build output to the default Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
