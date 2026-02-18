import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db";
import candidateRoutes from "./routes/candidate.routes";
import jobRoutes from "./routes/job.routes";
import applicationRoutes from "./routes/application.routes";

const app = express();
app.use(express.json());

app.use("/api", candidateRoutes);
app.use("/api", jobRoutes);
app.use("/api", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Kovon Backend Running ");
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
