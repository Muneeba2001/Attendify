import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

export default function ManageBreadCrumb() {
  /* 
    BreadCrumbs
    BreadCrumbs are basically navigation aids that help you understand on which page you are standing/locating...
    UseLocation is used to tell you the exact location!
  */
  const location = useLocation();

  // pathname is a built-in feature. Split is used to split the URLs. For example,
  // 'admin/Manage/student' will become ['admin', 'Manage', 'student']. Split will split the path from forward slashes.
  // filter means it takes one path at a time; if it is falsy, it will not return. If it is true, it will shift to a new array
  // that will be helpful in making breadcrumbs.
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Breadcrumbs data with labels and hrefs
  const breadCrumbs = [
    { label: 'Manage', href: '/AdminDashBoard/Manage' },
    { label: 'Student', href: '/AdminDashBoard/Manage/Student' }
  ];

  return (
    <>
      <div aria-label="breadCrumbs" className='flex items-center'>
        {
          breadCrumbs.map((breadCrumb, index) => {
            const isLast = index === breadCrumbs.length - 1;
            const isActive = location.pathname === breadCrumb.href;
  
            return (
              <React.Fragment key={breadCrumb.href}>
                {index > 0 && (
                  <Typography color="text.primary" sx={{ mx: 1 }}>
                    {' / '}
                  </Typography>
                )}
                {isLast || isActive ? (
                  <Typography
                    key={breadCrumb.href}
                    color="color.primary"
                    sx={{ fontWeight: isActive ? 'bold' : 'normal' }}
                  >
                    {breadCrumb.label}
                  </Typography>
                ) : (
                  <Link
                    key={breadCrumb.href}
                    underline="hover"
                    color="inherit"
                    href={breadCrumb.href}
                    sx={{ fontWeight: 'normal' }}
                  >
                    {breadCrumb.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })
        }
      </div>
    </>
  );
  

}
