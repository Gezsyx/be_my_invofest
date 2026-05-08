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

// Read all events
export const getEvents = (req: Request, res: Response) => {
  res.json(events);
};

// Create a new event
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
  res.status(201).json({ message: "berhasil ditambahkan", event: newEvent });
};

// Update an event
export const updateEvent = (req: Request, res: Response) => {};

// Delete an event
export const deleteEvent = (req: Request, res: Response) => {};
