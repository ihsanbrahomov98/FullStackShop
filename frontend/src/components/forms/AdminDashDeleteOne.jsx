import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import AdminNav from './AdminNav';
import AdminDashDelete from './AdminDashDelete';
import CopywritingLine from '../CopywritingLine';
import ViewAllProducts from './ViewAllProducts';

const validationSchema = yup.object({
  userId: yup.string('Enter your userId').required('userId is required'),
});

const AdminDashDeleteOne = () => {
  const formik = useFormik({
    initialValues: {
      userId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      axios.delete(
        '/back/mock/api/deleteone/',
        {
          data: {
            userId: values.userId,
          },
        },
        {
          headers: {
            Accept: 'application/json; charset=utf-8',
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
    },
  });

  return (
    <>
      <AdminNav />

      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
          sx={{ width: 1, height: 660, flexGrow: 1, pt: 5 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography variant="h4">Delete one Product by UserId!</Typography>
            <Box>
              <TextField
                id="userId"
                name="userId"
                label="userId"
                value={formik.values.userId}
                onChange={formik.handleChange}
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                helperText={formik.touched.userId && formik.errors.userId}
              />
            </Box>

            <Box>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                size="large"
              >
                DELETE
              </Button>
            </Box>
          </Stack>
          <Stack>
            <ViewAllProducts />
          </Stack>
        </Stack>
      </form>
      <CopywritingLine />
    </>
  );
};
export default AdminDashDeleteOne;
