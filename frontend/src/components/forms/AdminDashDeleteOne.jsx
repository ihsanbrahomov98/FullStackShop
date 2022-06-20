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
  name: yup
    .string('Enter your name')
    .min(2, 'name should be of minimum 2 characters length')
    .required('name is required'),
  img: yup.string('Enter your img').required('img is required'),
  description: yup
    .string('Enter your description')
    .required('description is required'),
});

const AdminDashDeleteOne = () => {
  const formik = useFormik({
    initialValues: {
      userId: '',
      name: '',
      img: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      axios.delete(
        '/back/mock/api/deleteone/',
        {
          data: {
            userId: values.userId,
            name: values.name,
            img: values.img,
            description: values.description,
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
