import StudentLogin from "../Pages/Student/StudentProtoType/StudentLogin";
import URLS from "../utilties/URL/URL";

export const StudentRoutes=[
  {
    path : URLS.STUDENT.Login,
    element : StudentLogin,
    layout : true
  },
]