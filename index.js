import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/tasks", taskRoutes);

const CONNECTION_URL = "mongodb://0.0.0.0:27017/civil20";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error}`));
