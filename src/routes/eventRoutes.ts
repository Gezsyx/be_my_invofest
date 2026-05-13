import express from "express";
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../controllers/EventController.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/post", createEvent);
router.get("/:id", getEventById);
router.put("/put/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;

