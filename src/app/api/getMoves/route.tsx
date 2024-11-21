import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { gameId } = req.query;

    try {
      const moves = await prisma.move.findMany({
        where: { gameId: String(gameId) },
        orderBy: { moveOrder: 'asc' },
      });
      res.status(200).json(moves);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch moves' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
