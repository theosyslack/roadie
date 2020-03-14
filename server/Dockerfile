FROM node:10.13.0-slim

WORKDIR /app 

# This is just a default, don't expect this to be the eventual PORT value.
ENV PORT 3030 

COPY dist .

ENTRYPOINT ["node", "index.js"]