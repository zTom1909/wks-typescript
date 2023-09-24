import { Router, Request, Response } from "express";
import { User } from "../db";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    interface Userdata {
      name: string;
      lastName: string;
    }
    const { name, lastName }: Userdata = req.body;
    const newUser = await User.create({ name, lastName });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
});

export default router;
