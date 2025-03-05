# مرحله پایه: نصب Bun با نسخه جدید Node
FROM node:20 as base
WORKDIR /nextl

# نصب Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# مرحله نصب وابستگی‌ها
FROM base as dependencies
WORKDIR /nextl
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# مرحله ساخت برنامه
FROM base as builder
WORKDIR /nextl
COPY . .
COPY --from=dependencies /nextl/node_modules ./node_modules
RUN bun run build

# مرحله اجرای برنامه
FROM base as runner
WORKDIR /nextl
COPY --from=builder /nextl/ ./
EXPOSE 3000
CMD ["bun", "run", "start"]
