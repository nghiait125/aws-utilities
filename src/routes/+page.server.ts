import { PrismaClient } from '@prisma/client';

export async function load() {
  // Init database connection.
  const prisma = new PrismaClient();

  // Query data.
  const services = await prisma.service.findMany({
    include: {
      Category: true,
    },
  });

  // Send data to client.
  return { services };
}
