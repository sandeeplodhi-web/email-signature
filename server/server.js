import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

await connectDB(process.env.MONGO_URI);

const app = express();

app.use(cors());

app.use(express.json({ limit: "5mb" }));

// Routes
app.use("/api/users", usersRouter);

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

// For local dev only
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
