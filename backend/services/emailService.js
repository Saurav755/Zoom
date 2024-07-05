import sgMail from "@sendgrid.mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendVerification(data) {
  const msg = {
    to: data.email,
    from: "hyperthapa541@gmail.com",
    subject: "${data.code} is your Verification",
    text: `Your verification code is: ${data.code}`,
    template_id : "d-6ff7456297c742deaec5ddd1b0008ef3";
    dynamic_template_data:  data.code,
  };

  return sgMail.send(msg);
}
