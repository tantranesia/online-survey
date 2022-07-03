import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: () => {
      localStorage.setItem(formik.values.email, 'email');
      window.location.href = '/';
    },
  });

  return (
    <div>
      <Box
        component="main"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          marginTop: '200px',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: 'white', fontStyle: 'oblique' }}
          >
            Online Survey!
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: '10px' }}
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: '10px' }}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="secondary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ bgcolor: '#064e9b', color: 'white', height: '60px' }}
              >
                Sign In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
