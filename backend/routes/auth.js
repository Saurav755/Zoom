// In your route file
import express from "express";
import { createSignUpVerification } from "../services/authServices.js";

var router = express.Router();

router.post("/sign-up/check-email", async function (req, res, next) {
  const data = req.body;
  const response = await createSignUpVerification(data.email);
  await sendVerification({
    code: response.code,
    email: response.email,
  });

  try {
    const data = req.body;

    await createSignUpVerification(data.email);
    res.send("Sign up User");
  } catch (error) {
    res.status(500).send("Something went wrong, please try again!");
  }
});

router.post("/sign-in", async function (req, res, next) {
  res.send("sign in user");
});

export default router;
