//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import env from "./config/env";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute";

const app = express();

const allowedOrigins = env.ALLOWED_ORIGINS;

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(express.json());

/* ✅ ROUTES */
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

export default app;
