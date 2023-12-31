# Define from what image we want to build our own image from.
FROM node:18.16

# Create the working directory that holds the application code inside our image.
RUN mkdir /app
WORKDIR /app

# Install app dependencies inside our image.
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

# Bind app to the specified port to be mapped by the Docker daemon.
EXPOSE 3000

# Define the command to run app.
CMD ["npm", "create_db"]
CMD ["npm", "serve"]