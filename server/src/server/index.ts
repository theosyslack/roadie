import express from "express";
import home from "./routes/home";
import facilities from "./routes/facilities";
import logServerStart from "../log/logServerStart";
import cors from "cors";
import { PORT } from "../consts";
const app = express();

export default function startServer() {
  // Allow Cross-Origin Requests
  app.use(cors());

  // Add Routes
  home(app);
  facilities(app);

  // Start Server
  app.listen(PORT, logServerStart);
}
