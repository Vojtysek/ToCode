import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const body = req.body;

  if (!body.first || !body.last || !body.image) {
    return res.status(400).json({ data: "Not everything inputed" });
  }

  res.status(200).json({ data: `${body.first} ${body.last}` });

  const newData = await prisma.content.create({
    data: {
      name: body.first,
      content: body.last,
      image: body.image,
    },
  });

  res.json(newData);
  res.redirect("/");
}
