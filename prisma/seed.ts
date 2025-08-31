import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@caselist.local" },
    update: {},
    create: { email: "admin@caselist.local", name: "Admin", role: "ADMIN" }
  });

  const lawyer = await prisma.user.upsert({
    where: { email: "lawyer@caselist.local" },
    update: {},
    create: { email: "lawyer@caselist.local", name: "Jane Counsel", role: "LAWYER" }
  });

  await prisma.profile.upsert({
    where: { userId: lawyer.id },
    update: {},
    create: {
      userId: lawyer.id,
      specialization: "family",
      years: 7,
      barId: "SG12345",
      availability: [{ day: "Mon", slots: ["09:00-10:00"] }],
      hourlyFee: 20000,
      fixedFee: 500000,
      bio: "Family law specialist.",
      approved: true
    }
  });

  await prisma.user.upsert({
    where: { email: "client@caselist.local" },
    update: {},
    create: { email: "client@caselist.local", name: "Abbas Client", role: "CLIENT" }
  });

  console.log("Seed complete");
}

main().finally(() => prisma.$disconnect());
