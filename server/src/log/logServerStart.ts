import chalk from 'chalk';
import { SERVER_PORT, CLIENT_PORT } from "../consts";

const SERVER_URL = `http://localhost:${SERVER_PORT}`;
const CLIENT_URL = `http://localhost:${CLIENT_PORT}`;

export default function logServerStart(){
  console.log(`${chalk.bold.green`🏕️ roadie-server`} | Server: ${ chalk.bold.blue(SERVER_URL) } | Client: ${ chalk.bold.blue(CLIENT_URL) }`
}