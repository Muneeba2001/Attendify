import "./App.css";
import Login from "./Pages/TeacherProtoType/Login";
import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./Pages/UserAuthPage";
import ForgetPassword from "./Pages/TeacherProtoType/ForgetPassword";
import DefaultLayout from "./Pages/DefaulLayout/DefaultLayout";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Register from "./Pages/Register";

//import DefaultLayout from "./DefaultLayout/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route
          path="/UserAuth"
          element={
            <DefaultLayout>
              <UserAuthPage />
            </DefaultLayout>
          }
        >
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
