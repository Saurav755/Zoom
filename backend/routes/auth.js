// In your route file
import express from "express";
import { createSignUpVerification } from "../services/authServices.js";

var router = express.Router();

router.post("/sign-up/check-email", async function (req, res, next) {
  const data = req.body;
  await createSignUpVerification(data.email);
  res.send("Sign up User");
});

router.post("sign-in", async function (req, res, next) {
  res.send("sign in user");
});

export default router;
