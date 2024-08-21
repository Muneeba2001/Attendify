import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

const TrackBreadCrumb = () => {
    const location = useLocation('');
    const pathnames = location.pathname.split('/').filter((x => x));
    const BreadCrumbs = [
        {
            label : 'Track', href: '/AdminDashBoard/Track'
        },
        {
            label : 'Attendance Sheet', href : '/AdminDashBoard/Track/AttendanceSheet'
         }
    ]
  return (
    <>
    <div aria-label='BreadCrumb' className='flex items-center'>
        {
            BreadCrumbs.map((BreadCrumb,index)=> {
                const isLast = index === BreadCrumbs.length-1;
                const isActive = location.pathname === BreadCrumb.href;
                return (
                    <React.Fragment key={BreadCrumb.href}>
                {index > 0 && (
                  <Typography color="text.primary" sx={{ mx: 1 }}>
                    {' / '}
                  </Typography>
                )}
                {isLast || isActive ? (
                  <Typography
                    key={BreadCrumb.href}
                    color="color.primary"
                    sx={{ fontWeight: isActive ? 'bold' : 'normal' }}
                  >
                    {BreadCrumb.label}
                  </Typography>
                ) : (
                  <Link
                    key={BreadCrumb.href}
                    underline="hover"
                    color="inherit"
                    href={BreadCrumb.href}
                    sx={{ fontWeight: 'normal' }}
                  >
                    {BreadCrumb.label}
                  </Link>
                )}
              </React.Fragment>
                )
            })
        }
    </div>
    </>
  )
}

export default TrackBreadCrumb
