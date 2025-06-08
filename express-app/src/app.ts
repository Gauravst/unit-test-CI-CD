// package imports
import express, { type Request, type Response } from "express";

// module imports
import { BASEPATH } from "./constants";

// constants
const app = express();

// middlewares
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   }),
// );
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get(`${BASEPATH}/healthcheck`, (_: Request, res: Response) => {
  try {
    res.status(200).json({ message: "working" });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
});

app.post(`${BASEPATH}/sum`, (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ data: a + b });
  return;
});

export { app };
