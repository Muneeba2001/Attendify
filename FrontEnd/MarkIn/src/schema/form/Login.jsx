import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  password: yup.string().min(4, "Password should be at least 4 characters").max(16, "Password should not be more than 16 characters").required("Please enter your password"),
});
