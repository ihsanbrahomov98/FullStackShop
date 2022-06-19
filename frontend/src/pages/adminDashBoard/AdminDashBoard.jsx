import React from 'react';
import AdminCreateProduct from '../../components/forms/AdminCreateProduct';
import AdminDashDelete from '../../components/forms/AdminDashDelete';
import Stack from '@mui/material/Stack';
import AdminDashUpdate from '../../components/forms/AdminDashUpdate';
import AdminDashDeleteOne from '../../components/forms/AdminDashDeleteOne';
import AdminNav from '../../components/forms/AdminNav';

const AdminDashBoard = () => {
  return (
    <>
      <Stack>
        <AdminNav />
        <AdminCreateProduct />
        <AdminDashDelete />
        <AdminDashUpdate />
        <AdminDashDeleteOne />
      </Stack>
    </>
  );
};

export default AdminDashBoard;
