const { execSync } = require("child_process");
try {
  console.log("🚀 Running Prisma migrations...");
  execSync("npx prisma migrate deploy", { stdio: "inherit" });
  console.log("✅ Prisma migrations applied successfully.");
} catch (err) {
  console.error("❌ Migration failed", err);
}
