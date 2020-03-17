#!/bin/sh
source .env

echo "Building 🏕️ Roadie"
echo "Building Client..."
cd client
yarn --silent
yarn build

echo "Building Server..."
cd ../server
yarn --silent
yarn build

echo "Building Container..."
cd ../
docker-compose config
docker-compose build

echo "Completed 🏕️ Roadie"
echo "Now run 'docker-compose up'"
echo "🏕️ Roadie will be visible at http://localhost:${CLIENT_PORT}"
exit