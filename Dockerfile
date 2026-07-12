#builder stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

#production stage and copy only what is needed
FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app .

RUN addgroup -S appgroup \
 && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["npm","start"]
