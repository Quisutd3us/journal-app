// library imports
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// ui imports
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from "../../hooks/index.js";
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() =>  status === 'checking' , [status]);
  console.log(isAuthenticating)

  const { email, password, onInputChange } = useForm({
    email: "dnarino@gmail.com",
    password: "123456ABC"
  })

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
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
            <Grid container spacing={2} sx={{ m: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  type='submit'
                  onSubmit={handleOnSubmit}
                  variant="contained"
                  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
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