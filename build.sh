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
  yarn --silent
  yarn build

  echo "Building Server..."
  cd ../server
  yarn --silent
  yarn build

  echo "Building Container..."
  cd ../
  docker-compose --log-level ERROR build

  echo "Completed 🏕️ Roadie"
  echo "Now run 'docker-compose up'"
  echo "🏕️ Roadie will be visible at http://localhost:${CLIENT_PORT}"
fi