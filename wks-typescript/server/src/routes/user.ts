import { Router, Request, Response } from "express";
import { User } from "../db";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});

router.post("/", async (req: Request, res: Response) => {
  interface Userdata {
    name: string;
    lastName: string;
  }
  const { name, lastName }: Userdata = req.body;
  const newUser = await User.create({ name, lastName });
  res.json(newUser);
});

export default router;
