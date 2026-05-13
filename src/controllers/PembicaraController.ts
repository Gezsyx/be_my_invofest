import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara.js";

let pembicara: Pembicara[] = [  {
    id: 1,
    nama: "John Doe",
    role: "Keynote Speaker",
    foto: "https://example.com/john_doe.jpg",
  },];

export const getPembicara = (req: Request, res: Response) => {
  res.json(pembicara);
};

export const createPembicara = (req: Request, res: Response) => {  const { nama, role, foto } = req.body;

  if (!nama || !role || !foto) {
    return res.status(400).json({ error: "Harus di isi semua" });
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

export const getPembicaraById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const pembicaraItem = pembicara.find((p) => p.id === id);

  if (!pembicaraItem) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }
  res.json(pembicaraItem);
};

export const updatePembicara = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const pembicaraItem = pembicara.find((p) => p.id === id);

  if (!pembicaraItem) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }

  pembicaraItem.nama = req.body.nama || pembicaraItem.nama;
  pembicaraItem.role = req.body.role || pembicaraItem.role;
  pembicaraItem.foto = req.body.foto || pembicaraItem.foto;
  res.json({ message: "Data berhasil diperbarui", pembicara: pembicaraItem });
};

export const deletePembicara = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  pembicara = pembicara.filter((p) => p.id !== id);
  res.json({ message: "Data berhasil dihapus" });
};
