import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.js";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 5000;

await connectDB(process.env.MONGO_URI);

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" || "https://email-signature-5uxy-ds59mex93-sandeep-lodhis-projects-ea637816.vercel.app" }));
app.use(express.json({ limit: "5mb" }));

app.use("/api/users", usersRouter);

// health
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
