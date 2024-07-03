import { API_ENDPOINT } from "../constants";

export async function SignUpCheckEmail(data) {
  const url = `${API_ENDPOINT}/auth/sign-up/check-email`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
