# Status: 90% Complete

- TODO: Complete Redux Configuration
- TODO: Fix Import issues from renaming Redux Actions

# Roadie 🏕️

Roadie is your one-stop shop for planning next weekend's road trip. Don't forget to pack s'mores!

## Requirements

- `yarn`
- `docker` and `docker-compose`

## Instructions

1. Get an API Key from https://ridb.recreation.gov/.
   1. Once you have made an account, you can find your key on this page: https://ridb.recreation.gov/profile
2. Run `./build.sh`
   1. Note: If you'd like to change the default ports (`80` for the client and `3030` for the server), you can do so by editing `.env`
3. Start your server by running `API_KEY=<ADD_YOUR_API_KEY_HERE> docker-compose up`
