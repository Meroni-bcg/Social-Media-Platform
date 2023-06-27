import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();0

router.post("/login", login);

export default router;