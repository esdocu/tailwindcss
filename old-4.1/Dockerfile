# Stage 1: Install dependencies and build the application
FROM node:23-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Production image
FROM node:23-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production
# Optionally, disable telemetry
# ENV NEXT_TELEMETRY_DISABLED 1

# Copy production dependencies from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy built application artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on (default is 3000)
EXPOSE 3000

# Start the application
CMD ["node_modules/.bin/next", "start"] 