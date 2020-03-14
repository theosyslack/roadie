import chalk from 'chalk';

export default function logAPIWarning (){
  console.log()
  console.log(chalk.red.bold`----------------------------------Warning!------------------------------------`);
  console.log()
  console.log(     chalk.red`roadie-server won't be able to make requests without a Recreation.gov API key.`);
  console.log(     chalk.red`sign up for an account at the url below to get one. Then, add it to server/.env`);
  console.log(     chalk.red`before rebuilding the app. Or, set it as an environment variable. `);
  console.log()
  console.log(    chalk.blue`                       https://ridb.recreation.gov/`)
  console.log()
}