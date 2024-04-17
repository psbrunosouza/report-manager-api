import cors from "cors";
import express from "express";
import "reflect-metadata";
import routes from "./routes/indes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", routes);

export default app;
