# Minimal probe for Maritime's source-preparation step. It contains nothing of ours.
FROM node:22-slim
WORKDIR /app
COPY server.js ./
EXPOSE 18789
CMD ["node", "server.js"]
