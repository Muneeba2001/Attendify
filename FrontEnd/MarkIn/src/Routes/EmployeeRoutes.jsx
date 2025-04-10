import URLS from "../utilties/URL/URL";
import EmployeeLogin from "../Pages/Employee/UserAuth/EmployeeLogin"
import EmployeeRegister from "../Pages/Employee/UserAuth/EmployeeRegister";

export const EmployeeRoutes=[
  {
    path : URLS.EMPLOYEE.Login,
    element : EmployeeLogin,
    layout : true
  },
  {
    path : URLS.EMPLOYEE.Register,
    element : EmployeeRegister,
    layout : true
  },
]