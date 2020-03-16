import logAPIWarning from "./log/logAPIWarning";
import startServer from "./server";
import { API_KEY } from "./consts";

async function main() {
  if (!API_KEY || API_KEY === "") {
    logAPIWarning();
  } else {
    startServer();
  }
}

main();
