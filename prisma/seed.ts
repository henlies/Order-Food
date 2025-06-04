import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const foodMenu = [
    { name: 'คั่วกลิ้ง', description: 'Spicy Southern Thai dish', image: '/kuakling.png' },
    { name: 'แกงเขียวหวาน', description: 'Green curry with chicken', image: '/green-curry.png' },
];

async function main() {
    await prisma.food.createMany({ data: foodMenu });
    console.log('Seed completed!');
}

main().finally(() => prisma.$disconnect());
