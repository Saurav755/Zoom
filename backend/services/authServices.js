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

// FRONTEND
// Handle form using react-hook-form
// Validate in the frontend using yup
// If invalid show error message
// If form validate, make request to backend use fetch api , post method

// BACKEND
// Create a router(API end point) to handle request
// Get the data sent from front in router and call a function in service to handle the data
// Save the data in the database
// Send success response(200) to the frontend
// If any error handle it using try catch and send error response (500) to frontend
