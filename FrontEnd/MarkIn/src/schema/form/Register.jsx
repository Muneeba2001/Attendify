import * as yup from "yup";
export const registerSchema = yup.object({
  name: yup.string().min(2).max(25).required("enter you name"),
  email: yup.string().email().required("enter you email"),
  phone_number: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
  password: yup.string().min(6).required("enter you password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default registerSchema;
