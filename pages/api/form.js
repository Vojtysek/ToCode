import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = JSON.parse(req.body);
    console.log(body);

    const newCode = await prisma.content.create({
      data: body,
    });

    res.json(newCode);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error creating code" });
  }
}
