# BUILDER IMAGE
FROM oven/bun:1 AS builder

# Create app directory
WORKDIR /app

# Get app dependencies
COPY package*.json ./

# building app
RUN bun i

# Bundle app source
COPY . .

# Build app
RUN bun run build

# FINAL IMAGE
FROM oven/bun:1 AS final

# Create app directory
WORKDIR /usr/src/app

# Get app dependencies. Needed because of module imports
COPY package*.json ./

# Copy build result
COPY --from=builder /app/build .

# set startup command
CMD ["bun", "index.js"]