import logAPIWarning from './log/logAPIWarning';
import startServer from './server';

const API_KEY = process.env.API_KEY;

async function main (){

  if (!API_KEY || API_KEY === "") {
    logAPIWarning();
  } else {
    startServer()
  }

  
}

main();