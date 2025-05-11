import { Link, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

const AdminDashBoardCrumb = () => {
    const location = useLocation('');
    const pathnames = location.pathname.split('/').filter((x)=>x);
    console.log(pathnames)
    const Breadcrumbs = [
        {
            label : "Home", href : '/AdminDashBoard'
        },
        {
            label: "DashBoard", href : "/AdminDashBoard"
        }
    ]
  return (
   <>
   <div aria-label='BreadCrumb' className='flex '>
    {
        Breadcrumbs.map((BreadCrumb,index)=> {
            const isLast = index === Breadcrumbs.length-1;
            const isActive = location.pathname ===  BreadCrumb.href;
            return(
                <React.Fragment key={BreadCrumb.href}>
                    {
                        index>0 && (
                            <Typography color="text.white" sx={{mx:1}}>{'/'}</Typography>
                        )
                    }
                    {
                        isLast || isActive ? (<Typography
                        key={BreadCrumb.href}
                        color="text.white"
                        sx={{mx:1, fontWeight:isActive? 'bold':'light'}}

                        >
                            {BreadCrumb.label}
                        </Typography>) : (<Link
                        key={BreadCrumb.href}
                        underline="hover"
                        color="white"
                        href={BreadCrumb.href}
                        sx={{ fontWeight: 'normal' }}>
                        </Link>)
                    }
                </React.Fragment>
            )
        })
    
    }
    

   </div>
   </>
  )
}

export default AdminDashBoardCrumb
