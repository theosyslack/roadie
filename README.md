# Status: 90% Complete

- TODO: Complete Redux Configuration

# Roadie 🏕️

Roadie is your one-stop shop for planning next weekend's road trip. Don't forget to pack s'mores!

## Requirements

- yarn
- docker and docker-compose

## Instructions

1. Run the following command in both `client/` and `/server`
   1. `yarn && yarn build`
2. Get an API Key from https://ridb.recreation.gov/
3. Set the following environment variables. Feel free to adjust the default ports.
   1. `export CLIENT_PORT=80`
   1. `export SERVER_PORT=3030`
   1. `export API_KEY=ADD_YOUR_API_KEY_HERE`
4. Start your server by running `docker-compose up --build`
