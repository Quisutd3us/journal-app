// library imports
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// ui imports
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from "../../hooks/index.js";
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';


const initialForm = {
  email: 'dnarino@gmail.com',
  password: 'ABC1234'
};

const formValidations = {
  email: [(value) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(value);
  }, 'The email value must have the @ character'],
  password: [(value) => {
    // const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/;
    const regex = /[A-Za-z\d]{3,}/;
    return regex.test(value);
  }, 'Minimum eight characters, at least one letter, one number and one special character [$!%*#?&_]']
};


export const LoginPage = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() =>  status === 'checking' , [status]);
 
  const { email, password,formState, onInputChange ,validForm,emailValid,passwordValid
  
  } = useForm(initialForm,formValidations)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!validForm) return;
    dispatch(startLoginWithEmailPassword(formState));
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    dispatch(startGoogleSignIn());
  };


  return (
    <>
      <AuthLayout title={'Login'}>
        <form
          onSubmit={handleOnSubmit}
        >
          <Grid
            container
          >
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'email'}
                type={'email'}
                placeholder={'miemail@mail.com'}
                fullWidth
                name={'email'}
                value={email}
                onChange={onInputChange}
                // manage errors
                error={!!emailValid}
                helperText={emailValid}
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
                // manage errors
                error={!!passwordValid}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ m: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  // disabled={isAuthenticating}
                  type='submit'
                  onSubmit={handleOnSubmit}
                  variant="contained"
                  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  // disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={'row'} justifyContent={'end'}>
              <Link
                color={'inherit'}
                component={
                  RouterLink
                }
                to={'/auth/register'}
              >
                Create Account
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};