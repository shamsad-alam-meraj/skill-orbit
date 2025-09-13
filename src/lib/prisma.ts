/* eslint-disable @typescript-eslint/no-require-imports */
// src/lib/prisma.ts

// Only use real Prisma if DATABASE_URL is reachable
let prisma: any;

try {
  const { PrismaClient } = require("@prisma/client");
  prisma = new PrismaClient();
} catch (e) {
  console.warn("Prisma client not initialized. Using mock for development.");

  // Mock prisma for frontend/dev work
  prisma = {
    user: {
      findMany: async () => [
        {
          id: 1,
          name: "Md. Shamsad Alam Meraj",
          email: "shamsad.alam.meraj@gmail.com",
        },
      ],
      create: async (data: any) => data,
    },
  };
}

export { prisma };
