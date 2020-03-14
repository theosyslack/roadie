import chalk from 'chalk';

const PORT = process.env.PORT;
const URL = `http://localhost:${PORT}`;

export default function logServerStart(){
  console.log(`${chalk.bold.green`🏕️ roadie-server`} | ${ chalk.bold.blue(URL) }`
}