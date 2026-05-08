import express from "express";
import { createCategories, getCategories } from "../controllers/CategpriesController.js";


const router = express.Router();

router.get("/", getCategories);
router.post("/post", createCategories);

export default router;