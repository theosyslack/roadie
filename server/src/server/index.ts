import express from 'express';
import home from './routes/home';
import facilities from './routes/facilities';
import logServerStart from '../log/logServerStart';

const app = express();
const PORT = process.env.PORT;

export default function startServer () {
  // Add Routes
  home(app);
  facilities(app);

  // Start Server
  app.listen(PORT, logServerStart)
}