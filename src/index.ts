import express, { Request, Response } from "express";
import cors from "cors";

import { team, command, end, start } from "./logic";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const port = process.env.PORT || 5001;

// Send the team information, incl bots
app.get("/", (req: Request, res: Response) => {
  res.send(team());
});

// Receive the first state, send the start signal
app.post("/start", (req: Request, res: Response) => {
  res.send(start(req.body));
});

// Send a command, recieve
app.post("/command", (req: Request, res: Response) => {
  res.send(command(req.body));
});

app.post("/end", (req: Request, res: Response) => {
  res.send(end(req.body));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Starting Battlesnake Server at http://0.0.0.0:${port}...`);
});
