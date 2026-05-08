import express from "express";
import { createEvent, getEvents } from "../controllers/EventController.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/post", createEvent);

export default router;

