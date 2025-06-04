import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const foods = await prisma.food.findMany();
    return new Response(JSON.stringify(foods), {
        headers: { 'Content-Type': 'application/json' },
    });
}
