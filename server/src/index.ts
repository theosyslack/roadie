import logAPIWarning from './log/logAPIWarning';
import startServer from './server';

const API_KEY = process.env.API_KEY;

async function main (){

  if (!API_KEY || API_KEY === "") {
    logAPIWarning();
  } else {
    startServer()
    // app.listen(PORT, () => console.log(`${chalk.bold.green`🏕️ roadie-server`} | ${ chalk.bold.blue(URL) }` )
  }

  
}

main();