import express from "express";
import { createPembicara, getPembicara, getPembicaraById, updatePembicara, deletePembicara } from "../controllers/PembicaraController.js";

const router = express.Router();

router.get("/", getPembicara);
router.post("/post", createPembicara);
router.get("/:id", getPembicaraById);
router.put("/put/:id", updatePembicara);
router.delete("/delete/:id", deletePembicara);

export default router;

