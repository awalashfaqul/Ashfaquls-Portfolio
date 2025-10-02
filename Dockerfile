# stage 1 — build
FROM node:22-alpine AS build
WORKDIR /app

# copy package files, install deps
COPY package*.json ./
RUN npm ci

# copy source and build (note: override base at build time)
COPY . .
# ensure Vite builds for root "/" when running in a container
# RUN npm run build -- --base=/
RUN npm run build

# stage 2 — serve with nginx
FROM nginx:stable-alpine
# optional: copy a custom nginx conf for SPA routing (see below)
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# copy build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
