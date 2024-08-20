import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Manage from '../../AdminDashBoard/Manage/Manage';
import Student from '../../AdminDashBoard/Manage/Student';
import DefaultLayout from '../../DefaulLayout/DefaultLayout';
import DashBoard from '../DashBoard';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/AdminDashBoard' element= {<DefaultLayout><DashBoard/></DefaultLayout>}/>
      <Route path='/AdminDashBoard/Manage' element = {<DefaultLayout><Manage/></DefaultLayout>}/>
      <Route path='/AdminDashBoard/Manage/Student' element = {<DefaultLayout><Student/></DefaultLayout>}/>
    </Routes>
  );
};

export default AdminRoutes;
