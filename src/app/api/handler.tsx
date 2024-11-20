import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Example response for a GET request
    res.status(200).json({ message: 'Hello, TypeScript API!' });
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}