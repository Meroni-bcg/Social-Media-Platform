import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../middleware/auth.js";

const router = express.Router();