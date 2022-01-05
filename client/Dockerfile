
# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app
RUN chown -R root:$(whoami) /app
RUN chmod -R 777 /app
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

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/client-angular /usr/share/nginx/html
