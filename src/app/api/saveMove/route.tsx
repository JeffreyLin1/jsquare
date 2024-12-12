// /app/api/saveMove/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { gameId, moveOrder, position } = await req.json();
  console.log("Received data:", { gameId, moveOrder, position }); 
  try {
    const move = await prisma.move.create({
      data: {
        gameId,
        moveOrder,
        position,
      },
    });
    return NextResponse.json(move);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save move' }, { status: 500 });
  }
}
