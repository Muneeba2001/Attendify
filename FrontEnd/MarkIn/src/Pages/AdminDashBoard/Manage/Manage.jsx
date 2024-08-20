import React from 'react';
import { Outlet } from 'react-router-dom';

const Manage = () => {
  return (
    <div>
      Manage
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Manage;
