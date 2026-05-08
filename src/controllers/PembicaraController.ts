import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara.js";

let pembicara: Pembicara[] = [];

// Get pembicara
export const getPembicara = (req: Request, res: Response) => {
  res.json(pembicara);
};
// Create a new pembicara
export const createPembicara = (req: Request, res: Response) => {  const { nama, role, foto } = req.body;

  if (!nama || !role || !foto) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newPembicara: Pembicara = {
    id: pembicara.length + 1,
    nama,
    role,
    foto,
  };
  pembicara.push(newPembicara);
  res.status(201).json({ message: "berhasil ditambahkan", pembicara: newPembicara });
};

// Update an pembicara
export const updatePembicara = (req: Request, res: Response) => {};

// Delete an pembicara
export const deletePembicara = (req: Request, res: Response) => {};
