# Use the official Node.js image as the base image
FROM node:20 AS build

# Set the working directory
WORKDIR /myportfolio

# # Copy package.json and package-lock.json (or yarn.lock)
# COPY package*.json ./


# Copy the rest of your application code
COPY . .

# Install dependencies
RUN npm install
# Build the application
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build output to Nginx
COPY --from=build /myportfolio/dist /usr/share/nginx/html

# Expose the port on which Nginx is running
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
