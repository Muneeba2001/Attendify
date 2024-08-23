import { Typography } from '@mui/material';
import React from 'react'
import { Link } from "@mui/material";
import { useLocation } from 'react-router-dom'

const EmployeeBreadCrumb = () => {
    const location = useLocation('');
    const pathnames = location.pathname.split('/').filter((x)=>x);
    const BreadCrumbs = [
        {
            label: 'Manage' , href : "/AdminDashBoard"
        },
        {
            label : "Employee", href : "/AdminDashBoard/Manage/Employee"
        }
    ]
  return (

    <>
    <div aria-label='BreadCrmb' className='flex items-center'>
        {
            BreadCrumbs.map((BreadCrumb,index)=> {
                const isLast = index === BreadCrumbs.length-1;
                const isActive = location.pathname === BreadCrumb.href;
                return (
                    <React.Fragment key={BreadCrumb.href}>
                        {
                            index>0 && (
                                <Typography color="text.primary" sx={{mx:1}}>
                                    {'/'}
                                </Typography>
                            )
                        }
                        {
                            isLast || isActive ? (
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
                            )
                        }
                    </React.Fragment>
                )
            })
        }

    </div>
    </>
  )
}

export default EmployeeBreadCrumb
