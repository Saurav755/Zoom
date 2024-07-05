//api endpoint handles requests from front end in the backend

import { API_ENDPOINT } from "../constants";

export async function SignInCheckEmail(data) {
  const url = `${API_ENDPOINT}/auth/sign-in`;

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
