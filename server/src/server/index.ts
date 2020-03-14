import express from 'express';
import home from './routes/home';
import facilities from './routes/facilities';
import logServerStart from '../log/logServerStart';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3030;

export default function startServer () {
  // Allow Cross-Origin Requests
  app.use(cors());

  // Add Routes
  home(app);
  facilities(app);

  // Start Server
  app.listen(PORT, logServerStart)
}