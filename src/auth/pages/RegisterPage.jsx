import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Edit } from "@mui/icons-material";
import { useForm } from '../../hooks';

const initialForm = {
  displayName: 'David Doe',
  email: 'dnarino@gmail.com',
  password: 'ABC1234'
};

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } = useForm(initialForm);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('first')
    console.log( formState )
  };

  return (
    <>
      <AuthLayout title={'Register'}>
        <form
          onSubmit={handleOnSubmit}
        >
          <Grid
            container
          >
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'Your Name'}
                type={'text'}
                placeholder={'Jhon Doe'}
                fullWidth
                name={'displayName'}
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'email'}
                type={'email'}
                placeholder={'miemail@mail.com'}
                fullWidth
                name={'email'}
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'password'}
                type={'password'}
                fullWidth
                name={'password'}
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            {/* submit button */}
            <Grid container spacing={2} sx={{ m: 2 }}>
              <Grid item xs={12} >
                <Button
                  type='submit'
                  variant="contained"
                  fullWidth>
                  <Edit />
                  <Typography sx={{ ml: 1 }}>Register</Typography>
                </Button>
              </Grid>
            </Grid>
            {/* Login section */}
            <Grid container direction={'row'} justifyContent={'end'} >
              <Typography sx={{ mr: 1 }} >Are you Register?</Typography>
              <Link
                color={'inherit'}
                component={
                  RouterLink
                }
                to={'/auth/login'}
              >
                Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};