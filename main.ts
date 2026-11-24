import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Express server is running");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
