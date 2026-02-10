import express from "express";
//const { sendContactMessage } = require("../controllers/contactController");
import { sendContactMessage } from "../controllers/contactController";

const router = express.Router();

router.post("/", sendContactMessage);

export default router;
