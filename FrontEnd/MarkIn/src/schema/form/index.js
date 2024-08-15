import * as yup from "yup";
export const registerSchema = yup.object({
  name: yup.string().min(2).max(25).required("enter you name"),
  email: yup.string().email().required("enter you email"),
  password: yup.string().min(6).required("enter you password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default registerSchema;
