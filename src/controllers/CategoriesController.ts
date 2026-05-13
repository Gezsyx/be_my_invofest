import { Request, Response } from "express";
import { Category } from "../types/kategori.js";

let category: Category[] = [
    {
    id: 1,
    name: "Teknologi",
  },
];

export const getCategories = (req: Request, res: Response) => {
  res.json(category);
};

export const createCategories = (req: Request, res: Response) => {  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Nama fields are required" });
  }

  const newCategory: Category = {
    id: category.length + 1,
    name,
  };
  category.push(newCategory);
  res.status(201).json({ message: "berhasil ditambahkan", category: newCategory });
};

export const getCategoriesById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const categories = category.find((c) => c.id === id);

  if (!categories) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }
  res.json(categories);
};

export const updateCategories = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const categories = category.find((c) => c.id === id);

  if (!categories) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }

  categories.name = req.body.name || categories.name;
  res.json({ message: "Data berhasil diperbarui", category: categories });
};

export const deleteCategories = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  category = category.filter((c) => c.id !== id);
  res.json({ message: "Data berhasil dihapus" });
};

