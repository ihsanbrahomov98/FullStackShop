import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';

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
    <form onSubmit={formik.handleSubmit}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: 1, height: 500, flexGrow: 1 }}
      >
        <Typography>Delete one Product by UsedId!</Typography>
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
          <Box>
            {' '}
            <TextField
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>

          <Box>
            <TextField
              id="img"
              name="img"
              label="img"
              value={formik.values.img}
              onChange={formik.handleChange}
              error={formik.touched.img && Boolean(formik.errors.img)}
              helperText={formik.touched.img && formik.errors.img}
            />
          </Box>
          <Box>
            <TextField
              id="description"
              name="description"
              label="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Box>
        </Box>
        <Box>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
export default AdminDashDeleteOne;
