
# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY ./ /app/
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
RUN chown -R root:$(whoami) /var/cache/nginx
RUN chmod -R 777 /var/cache/nginx
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/client-angular /usr/share/nginx/html
