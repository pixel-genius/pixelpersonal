# -------------------------
# مرحله پایه
# -------------------------
FROM node:18-slim AS base

RUN apt-get update && apt-get install -y curl bash && rm -rf /var/lib/apt/lists/*

# نصب bun
RUN curl -fsSL https://bun.sh/install | bash && \
    ln -s /root/.bun/bin/bun /usr/local/bin/bun

WORKDIR /app

# -------------------------
# نصب dependencies
# -------------------------
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# -------------------------
# مرحله بیلد
# -------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# -------------------------
# مرحله production
# -------------------------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./

EXPOSE 3000
CMD ["bun", "run", "start"]
