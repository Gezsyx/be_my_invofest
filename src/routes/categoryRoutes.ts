import express from "express";
import { createCategories, getCategories, getCategoriesById, updateCategories, deleteCategories } from "../controllers/CategoriesController.js";


const router = express.Router();

router.get("/", getCategories);
router.post("/post", createCategories);
router.get("/:id", getCategoriesById);
router.put("/put/:id", updateCategories);
router.delete("/delete/:id", deleteCategories);

export default router;