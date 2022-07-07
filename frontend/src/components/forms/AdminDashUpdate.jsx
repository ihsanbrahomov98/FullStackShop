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
import CopywritingLine from '../CopywritingLine';
import ViewAllProducts from './ViewAllProducts';
import { Formik, Form, Field, FieldArray } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { grey, blue } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { Colors } from '../styles/theme';
import FixedCricles from '../FixedCricles';

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

  price: yup
    .number('Enter your description')
    .required('description is required'),
  quantityLeft: yup
    .number('Enter your description')
    .required('description is required'),
  category: yup
    .string('Enter your description')
    .required('description is required'),
  model: yup
    .string('Enter your description')
    .required('description is required'),
});

const AdminDashUpdate = () => {
  const [sizeArray, setSizeArray] = React.useState([]);
  const [filteredArray, setFilteredArray] = React.useState([]);
  const [checked40Bool, setChecked40Bool] = React.useState(false);
  const [checked41Bool, setChecked41Bool] = React.useState(false);

  const [checked42Bool, setChecked42Bool] = React.useState(false);
  const [checked43Bool, setChecked43Bool] = React.useState(false);
  const [checked44Bool, setChecked44Bool] = React.useState(false);
  const [checked45Bool, setChecked45Bool] = React.useState(false);
  const [checkedBlack, setCheckedBlack] = React.useState(false);
  const [checkedBlue, setCheckedBlue] = React.useState(false);
  const [checkedWhite, setCheckedWhite] = React.useState(false);

  const sizeOperation = (shoeSize, checkedBool) => {
    if (!checkedBool) {
      setSizeArray((sizeArray) => [...sizeArray, shoeSize]);

      setFilteredArray(Array.from(new Set(sizeArray)));
      console.log(`added ${shoeSize}, array is:${filteredArray}`);
    } else {
      setFilteredArray(filteredArray.filter((item) => item === shoeSize));
      console.log(`removed ${shoeSize}, array is:${filteredArray}`);
    }
  };
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
      model: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.put('/back/mock/api/update', {
        userId: values.userId,
        name: values.name,
        img: values.img,
        description: values.description,
        color: values.color,
        size: values.size,
        price: values.price,
        quantityLeft: values.quantityLeft,
        category: values.category,
        model: values.model,
      });
    },
  });

  return (
    <>
      <Stack sx={{ height: 65 }}>
        <AdminNav />
      </Stack>{' '}
      <FixedCricles />
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
                width="100%"
              >
                <Grid item={{ xs: 12, md950: 12, lg: 12 }}>
                  <Typography
                    sx={{
                      fontSize: 30,
                      fontWeight: 'bold',

                      pt: 4,
                    }}
                    align="center"
                    variant="h3"
                  >
                    Промяна на Продукт
                  </Typography>
                </Grid>

                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="ID на продукт"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="userId"
                    name="userId"
                    label="ID на продукт"
                    value={formik.values.userId}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.userId && Boolean(formik.errors.userId)
                    }
                    helperText={formik.touched.userId && formik.errors.userId}
                  />
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Категория"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="category"
                    name="category"
                    label="Категория"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                  />
                </Grid>

                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  {' '}
                  <TextField
                    placeholder="Име"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="name"
                    name="name"
                    label="Име"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Снимка"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="img"
                    name="img"
                    label="Снимка"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                    error={formik.touched.img && Boolean(formik.errors.img)}
                    helperText={formik.touched.img && formik.errors.img}
                  />
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Описание"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="description"
                    name="description"
                    label="Описание"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Марка"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="model"
                    name="model"
                    label="Марка"
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    error={formik.touched.model && Boolean(formik.errors.model)}
                    helperText={formik.touched.model && formik.errors.model}
                  />
                </Grid>

                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Оставащо количество"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="quantityLeft"
                    name="quantityLeft"
                    label="Оставащо количество"
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
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <TextField
                    placeholder="Цена"
                    InputLabelProps={{
                      style: { color: Colors.black },
                    }}
                    sx={{
                      color: Colors.black,

                      '& .MuiInputLabel-root': { color: Colors.black },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': { borderColor: Colors.black },
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          borderColor: Colors.black,
                        },
                      '&.Mui-checked': {
                        color: Colors.black,
                      },
                    }}
                    id="price"
                    name="price"
                    label="Цена"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                  />
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography>40</Typography>
                    <Checkbox
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                      label="Child"
                      checked={checked40Bool}
                      name="size"
                      value={'40'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('40', checked40Bool);
                        setChecked40Bool(!checked40Bool);
                      }}
                    />
                    <Typography>41</Typography>
                    <Checkbox
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                      label="Child"
                      checked={checked41Bool}
                      name="size"
                      value={'41'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('41', checked41Bool);
                        setChecked41Bool(!checked41Bool);
                      }}
                    />
                    <Typography>42</Typography>
                    <Checkbox
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                      label="Child"
                      checked={checked42Bool}
                      name="size"
                      value={'42'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('42', checked42Bool);
                        setChecked42Bool(!checked42Bool);
                      }}
                    />
                    <Typography>43</Typography>
                    <Checkbox
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                      label="Child"
                      checked={checked43Bool}
                      name="size"
                      value={'43'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('43', checked43Bool);
                        setChecked43Bool(!checked43Bool);
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item={{ xs: 12, md950: 6, lg: 6 }}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography>Black</Typography>
                    <Checkbox
                      label="Child"
                      checked={checkedBlack}
                      name="color"
                      value={'black'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('black', checkedBlack);
                        setCheckedBlack(!checkedBlack);
                      }}
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                    />
                    <Typography>Blue</Typography>
                    <Checkbox
                      label="Child"
                      checked={checkedBlue}
                      name="color"
                      value={'blue'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('blue', checkedBlue);
                        setCheckedBlue(!checkedBlue);
                      }}
                      sx={{
                        color: blue[800],
                        '&.Mui-checked': {
                          color: blue[800],
                        },
                      }}
                    />
                    <Typography>White</Typography>
                    <Checkbox
                      label="Child"
                      checked={checkedWhite}
                      name="color"
                      value={'white'}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                      onClick={() => {
                        sizeOperation('white', checkedWhite);
                        setCheckedWhite(!checkedWhite);
                      }}
                      sx={{
                        color: grey[200],
                        '&.Mui-checked': {
                          color: grey[200],
                        },
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item={{ xs: 12, md950: 12, lg: 12 }}>
                  <Stack direction="row" justifyContent="center" sx={{ pt: 2 }}>
                    <Button
                      color="primary"
                      size="large"
                      variant="contained"
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: Colors.orange,
                        '&:hover': {
                          backgroundColor: Colors.orangeForCartHover,
                        },
                      }}
                    >
                      Промяна на Продукт
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </form>
          <Stack sx={{ p: 5 }}>
            <ViewAllProducts />
          </Stack>
        </Stack>
        <CopywritingLine />
        <Stack sx={{ height: 45 }}> </Stack>
      </Container>
    </>
  );
};
export default AdminDashUpdate;
