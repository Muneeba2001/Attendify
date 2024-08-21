import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Manage from '../../AdminDashBoard/Manage/Manage';
import Student from '../../AdminDashBoard/Manage/Student';
import DefaultLayout from '../../DefaulLayout/DefaultLayout';
import DashBoard from '../DashBoard';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/AdminDashBoard' element= {<DefaultLayout><DashBoard/></DefaultLayout>}>
      <Route path='Manage' element = {<Manage/>}/>
      </Route>
     
      <Route path='/AdminDashBoard/Manage/Student' element = {<DefaultLayout><Student/></DefaultLayout>}/>
    </Routes>
//     <Routes>
//     {/* Admin Dashboard Route */}
//     <Route path="/AdminDashBoard" element={<DefaultLayout />}>
//       {/* Dashboard is the default route */}
//       <Route index element={<DashBoard />} />

//       {/* Manage Page nested under Admin Dashboard */}
//       <Route path="Manage" element={<Manage />}>
//         {/* Student Page nested under Manage */}
//         <Route path="Student" element={<Student />} />
//       </Route>
//     </Route>
//   </Routes>
  );
};

export default AdminRoutes;
