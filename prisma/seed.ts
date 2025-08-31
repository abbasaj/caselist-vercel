import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@caselist.local" },
    update: {},
    create: {
      email: "admin@caselist.local",
      password: "admin123", // Add a default password or hash
      role: Role.ADMIN,
    },
  });

  // Sample lawyer user
  const lawyerUser = await prisma.user.upsert({
    where: { email: "lawyer@caselist.local" },
    update: {},
    create: {
      email: "lawyer@caselist.local",
      password: "lawyer123",
      role: Role.LAWYER,
    },
  });

  // Lawyer profile
  const lawyer = await prisma.lawyer.upsert({
    where: { userId: lawyerUser.id },
    update: {},
    create: {
      userId: lawyerUser.id,
      name: "John Doe",
      bio: "Experienced corporate lawyer.",
    },
  });

  // Sample client user
  const clientUser = await prisma.user.upsert({
    where: { email: "client@caselist.local" },
    update: {},
    create: {
      email: "client@caselist.local",
      password: "client123",
      role: Role.CLIENT,
    },
  });

  // Client profile
  const client = await prisma.client.upsert({
    where: { userId: clientUser.id },
    update: {},
    create: {
      userId: clientUser.id,
      name: "Jane Smith",
    },
  });

  // Sample case
  await prisma.case.upsert({
    where: { id: "case-sample-1" },
    update: {},
    create: {
      id: "case-sample-1",
      title: "Sample Legal Case",
      details: "This is a demo case for testing.",
      status: "OPEN",
      clientId: client.id,
      lawyerId: lawyer.id,
    },
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
