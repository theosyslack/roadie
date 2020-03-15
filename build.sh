#!/bin/sh
export CLIENT_PORT=80
export SERVER_PORT=3030
# API_KEY should be set externally, so it's not traked by git.

if [ -z $API_KEY ]; then
  echo "Please set your API_KEY before continuing."
else 
  echo "Building 🏕️ Roadie"
  echo "Building Client..."
  cd client
  yarn 
  yarn build

  echo "Building Server..."
  cd ../server
  yarn
  yarn build

  echo "Building Container..."
  cd ../
  docker-compose build

  echo "Completed 🏕️ Roadie"
  echo "Now run `docker-compose up`"
fi