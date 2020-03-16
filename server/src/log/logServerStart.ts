import chalk from 'chalk';
import { PORT } from "../consts";

const URL = `http://localhost:${PORT}`;

export default function logServerStart(){
  console.log(`${chalk.bold.green`🏕️ roadie-server`} | ${ chalk.bold.blue(URL) }`
}