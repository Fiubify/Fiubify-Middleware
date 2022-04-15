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

ARG NODE_ENV
# Run the app
CMD if [ "$NODE_ENV"="DEV" ] ; then npm run dev; else npm run start ; fi
