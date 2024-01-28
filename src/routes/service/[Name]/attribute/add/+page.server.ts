import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

// Init database connection.
const prisma = new PrismaClient();

export const actions: Actions = {
  async default({ request, params }) {
    // Get form data.
    const formData = await request.formData();

    // Extract service name.
    const serviceName = params.Name;

    // Query data.
    const service = await prisma.service.findUnique({
      where: {
        Name: serviceName,
      },
    });

    // Redirect data is empty.
    if (!service) {
      throw redirect(302, '/');
    }

    // Extract attribute name.
    const attributeName = formData.get('Name') as string;

    // Save data into database.
    await prisma.attribute.create({
      data: {
        Name: attributeName,
        ServiceId: service.Id,
      },
    });

    // Redirect back.
    throw redirect(302, `/service/${service.Name}/attribute`);
  },
};
