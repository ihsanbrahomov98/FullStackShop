import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AdminNav from './AdminNav';

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
  size: yup
    .string('Enter your description')
    .required('description is required'),
  color: yup
    .string('Enter your description')
    .required('description is required'),
  price: yup
    .number('Enter your description')
    .required('description is required'),
  quantityLeft: yup
    .number('Enter your description')
    .required('description is required'),
  category: yup
    .string('Enter your description')
    .required('description is required'),
});

const AdminCreateProduct = () => {
  const formik = useFormik({
    initialValues: {
      userId: '',
      name: '',
      img: '',
      description: '',
      color: '',
      size: '',
      category: '',
      price: 0,
      quantityLeft: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post('/back/mock/api/create', {
        userId: values.userId,
        name: values.name,
        img: values.img,
        description: values.description,
        color: values.color,
        size: values.size,
        price: values.price,
        quantityLeft: values.quantityLeft,
        category: values.category,
      });
    },
  });

  return (
    <>
      <Stack sx={{ height: 55, bgcolor: 'info.main' }}>
        <AdminNav />
      </Stack>{' '}
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          width="100%"
          sx={{ pt: 7 }}
        >
          <Grid item xs={12}>
            <Typography>Creating a product!</Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="userId"
              name="userId"
              label="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
              error={formik.touched.userId && Boolean(formik.errors.userId)}
              helperText={formik.touched.userId && formik.errors.userId}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="category"
              name="category"
              label="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            />
          </Grid>

          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="img"
              name="img"
              label="img"
              value={formik.values.img}
              onChange={formik.handleChange}
              error={formik.touched.img && Boolean(formik.errors.img)}
              helperText={formik.touched.img && formik.errors.img}
            />
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="color"
              name="color"
              label="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              error={formik.touched.color && Boolean(formik.errors.color)}
              helperText={formik.touched.color && formik.errors.color}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="size"
              name="size"
              label="size"
              value={formik.values.size}
              onChange={formik.handleChange}
              error={formik.touched.size && Boolean(formik.errors.size)}
              helperText={formik.touched.size && formik.errors.size}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="quantityLeft"
              name="quantityLeft"
              label="quantityLeft"
              value={formik.values.quantityLeft}
              onChange={formik.handleChange}
              error={
                formik.touched.quantityLeft &&
                Boolean(formik.errors.quantityLeft)
              }
              helperText={
                formik.touched.quantityLeft && formik.errors.quantityLeft
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="price"
              name="price"
              label="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </Grid>

          <Grid item xs={6}>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default AdminCreateProduct;
