import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@caselist.local" },
    update: {},
    create: {
      email: "admin@caselist.local",
      role: Role.ADMIN // use enum, not string
      // name: "Admin", // only include if Prisma schema allows it
    },
  });

  await prisma.user.upsert({
    where: { email: "lawyer@caselist.local" },
    update: {},
    create: {
      email: "lawyer@caselist.local",
      role: Role.LAWYER
    },
  });

  console.log("Seed finished");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
