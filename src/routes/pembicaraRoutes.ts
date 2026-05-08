import express from "express";
import { createPembicara, getPembicara } from "../controllers/PembicaraController.js";

const router = express.Router();

router.get("/", getPembicara);
router.post("/post", createPembicara);

export default router;

