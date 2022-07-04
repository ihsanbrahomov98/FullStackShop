import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Colors } from '../styles/theme';
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
import FixedCricles from '../FixedCricles';

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
      <FixedCricles />
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={3}
          sx={{ width: 1, pt: 5 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 'bold',
              }}
              align="center"
              variant="h3"
            >
              Изтриване на Продукт
            </Typography>
            <Box>
              <TextField
                placeholder="Въведи ID на продукта"
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
                sx={{
                  backgroundColor: Colors.orange,
                  '&:hover': {
                    backgroundColor: Colors.orangeForCartHover,
                  },
                }}
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
      <Stack sx={{ height: 45 }}> </Stack>
    </>
  );
};
export default AdminDashDeleteOne;
