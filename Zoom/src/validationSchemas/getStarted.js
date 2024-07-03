import * as yup from "yup";

export const validationSchema = yup
  .object()
  .shape({
    email: yup.string().email("please enter a valid email address"),
  })
  .required();
