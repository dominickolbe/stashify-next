FROM node:18

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]