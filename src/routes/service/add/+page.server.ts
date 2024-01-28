import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

// Init database connection.
const prisma = new PrismaClient();

export async function load() {
  // Query data.
  const categories = await prisma.category.findMany();

  // Send data to client.
  return {
    categories,
  };
}

export const actions: Actions = {
  async default({ request }) {
    // Get form data.
    const formData = await request.formData();

    // Extract fields.
    const Name: string = formData.get('Name') as string;
    const ShortName: string = formData.get('ShortName') as string;
    const LongName: string = formData.get('LongName') as string;
    const Icon: string = formData.get('Icon') as string;
    const IconType: number = Number(formData.get('IconType') as unknown);
    const CategoryId: number = Number(formData.get('CategoryId') as unknown);

    // Save data into database.
    await prisma.service.create({
      data: {
        Name,
        ShortName,
        LongName,
        Icon,
        IconType,
        CategoryId,
      },
    });

    // Redirect back.
    throw redirect(302, '/');
  },
};
