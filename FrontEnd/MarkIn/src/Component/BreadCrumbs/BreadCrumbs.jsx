import React from 'react';
import { Typography, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Breadcrumb = ({ labelMap = {}, basePath = '' }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname
    .replace(basePath, '')
    .split('/')
    .filter((x) => x);

  const handleClick = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <div aria-label="breadcrumb" className="flex items-center">
      <Link
        underline="hover"
        color="inherit"
        href={basePath || '/'}
        onClick={handleClick(basePath || '/')}
        sx={{ fontWeight: 'normal' }}
      >
        {labelMap['home'] || 'Home'}
      </Link>
      {pathnames.map((value, index) => {
        const to = `${basePath}/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label =
          labelMap[value.toLowerCase()] ||
          value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <React.Fragment key={to}>
            <Typography color="text.primary" sx={{ mx: 1 }}>
              /
            </Typography>
            {isLast ? (
              <Typography color="primary" sx={{ fontWeight: 'bold' }}>
                {label}
              </Typography>
            ) : (
              <Link
                underline="hover"
                color="inherit"
                href={to}
                onClick={handleClick(to)}
                sx={{ fontWeight: 'normal' }}
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
