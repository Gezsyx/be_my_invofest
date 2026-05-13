import { Request, Response } from "express";
import { Event } from "../types/event.js";

let events: Event[] = [
  {
    id: 1,
    nama: "Tech Conference 2024",
    pembicara: "2024-09-15",
    tanggal: "Jakarta Convention Center",
    jam: "A conference about the latest trends in technology.",
  },
];

export const getEvents = (req: Request, res: Response) => {
  res.json(events);
};

export const createEvent = (req: Request, res: Response) => {
  const { nama, pembicara, tanggal, jam } = req.body;

  if (!nama || !pembicara || !tanggal || !jam) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newEvent: Event = {
    id: events.length + 1,
    nama: nama,
    pembicara: pembicara,
    tanggal: tanggal,
    jam: jam,
  };
  events.push(newEvent);
  res
    .status(201)
    .json({ message: "Data berhasil ditambahkan", event: newEvent });
};

export const getEventById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }
  res.json(event);
};

export const updateEvent = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }

  event.nama = req.body.nama || event.nama;
  event.pembicara = req.body.pembicara || event.pembicara;
  event.tanggal = req.body.tanggal || event.tanggal;
  event.jam = req.body.jam || event.jam;
  res.json({ message: "Data berhasil diperbarui", event });
};

export const deleteEvent = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  events = events.filter((e) => e.id !== id);
  res.json({ message: "Data berhasil dihapus" });
};
