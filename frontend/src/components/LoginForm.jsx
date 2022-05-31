import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  

});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
     
    
      <form onSubmit={formik.handleSubmit}>
      <Stack  direction="column"  justifyContent="center" alignItems="center" spacing={2} sx={{ width: 1, height: 500, flexGrow: 1 }} > 
     
        <Box>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
         </Box>
         <Box>
            <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />
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
export default LoginForm;