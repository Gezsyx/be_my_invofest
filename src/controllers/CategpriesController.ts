import { Request, Response } from "express";
import { Category } from "../types/kategori.js";

let category: Category[] = [];

// Get categories
export const getCategories = (req: Request, res: Response) => {
  res.json(category);
};
// Create a new category
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

// Update an category
export const updateCategories = (req: Request, res: Response) => {};

// Delete an category
export const deleteCategories = (req: Request, res: Response) => {};
