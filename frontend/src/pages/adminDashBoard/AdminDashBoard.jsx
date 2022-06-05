import React from 'react';
import AdminCreateProduct from '../../components/forms/AdminCreateProduct';
import AdminDashDelete from '../../components/forms/AdminDashDelete';
import Stack from '@mui/material/Stack';
import AdminDashUpdate from '../../components/forms/AdminDashUpdate';
import AdminDashDeleteOne from '../../components/forms/AdminDashDeleteOne';

const AdminDashBoard = () => {
  return (
    <>
      <Stack>
        <AdminCreateProduct />
        <AdminDashDelete />
        <AdminDashUpdate />
        <AdminDashDeleteOne />
      </Stack>
    </>
  );
};

export default AdminDashBoard;
