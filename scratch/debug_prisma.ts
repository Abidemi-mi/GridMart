import "dotenv/config";
import { PrismaClient } from "@prisma/client";

async function test() {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL,
    });
    console.log("PrismaClient initialized with datasourceUrl");
    await prisma.$connect();
    console.log("Connected successfully!");
    await prisma.$disconnect();
  } catch (e) {
    console.error("Failed with datasourceUrl:", e.message);
  }

  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      }
    });
    console.log("PrismaClient initialized with datasources");
    await prisma.$connect();
    console.log("Connected successfully!");
    await prisma.$disconnect();
  } catch (e) {
    console.error("Failed with datasources:", e.message);
  }
}

test();
