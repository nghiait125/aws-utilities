import type { RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

// Init database connection.
const prisma = new PrismaClient();

export async function load({ params }: RequestEvent) {
  const { Name } = params;

  // Query data.
  const service = await prisma.service.findUnique({
    where: {
      Name,
    },
    include: {
      Category: true,
      Attributes: true,
    },
  });

  // Redirect data is empty.
  if (!service) {
    throw redirect(302, '/');
  }

  // Send data to client.
  return {
    service,
  };
}
