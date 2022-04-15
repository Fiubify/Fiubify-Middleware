FROM node:alpine

# Set the working directory
WORKDIR  /app

# Copy the files
COPY package*.json ./
COPY . .

# Install the packages
RUN npm install

# Expose the port
ENV PORT=3000
EXPOSE ${PORT}

# Run the app
CMD ["npm", "run", "dev"]
