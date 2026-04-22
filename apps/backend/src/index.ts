import "dotenv/config";
import express from "express";
import cors from "cors";
import { db } from "@repo/db";
import { auth, authHandler } from "@repo/auth";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.all("/api/auth/*splat", authHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
    dbStatus: db ? "Connnected" : "Disconnected",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`);
});
