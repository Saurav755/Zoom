// In authServices.js or authServices.ts
import { PrismaClient } from "@prisma/client";
import random from "random";
import date from "date-and-time";

const prisma = new PrismaClient();

export async function createSignUpVerification(email) {
  const code = String(random.int(100000, 999999));
  const now = new Date();
  const expiryAt = date.addMinutes(now, 10); // Adjust the date calculation

  await prisma.signUpVerification.create({
    data: { email, code, expiryAt }, // Ensure the structure matches Prisma schema
  });
}
