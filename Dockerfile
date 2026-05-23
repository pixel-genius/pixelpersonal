ARG BUN_IMAGE=docker.arvancloud.ir/oven/bun:1

# -------------------------
# مرحله پایه
# -------------------------
FROM ${BUN_IMAGE} AS base
WORKDIR /app

# -------------------------
# نصب dependencies
# -------------------------
FROM base AS deps
ARG NPM_REGISTRY=https://registry.npmmirror.com
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --registry ${NPM_REGISTRY}

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
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app ./

EXPOSE 3000
CMD ["bun", "run", "start"]
