import { useMemo, useState } from 'react';
// libraries imports
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
// MUI libraries
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Edit } from "@mui/icons-material";

import { useForm } from '../../hooks';
import { startUserWithEmailPassword } from '../../store/auth/thunks';

const initialForm = {
  displayName: 'David Doe',
  email: 'dnarino@gmail.com',
  password: 'ABC1234'
};


const formValidations = {
  displayName: [(value) => {
    const regex = /^[a-zA-Z0-9_ ]{1,20}$/;
    return regex.test(value);
  }, 'The Name must have 1 to 20 characters '],
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

export const RegisterPage = () => {

  const {status,errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const [formSubmited , setFormSubmited] = useState(false);

  const { displayName, email, password, formState, onInputChange, validForm, displayNameValid, emailValid, passwordValid
  } = useForm(initialForm, formValidations);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!validForm) return;
    dispatch(startUserWithEmailPassword(formState));
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
                // manage Form errors
                error={!!displayNameValid}
                helperText={displayNameValid}
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
                // manage Form errors
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
                // manage Form errors
                error={!!passwordValid}
                helperText={passwordValid}
              />
            </Grid>

            {/* Error message Section */}

            <Grid container sx={errorMessage? {display:'flex',mt:2}:{display:'none'}}>
              <Grid item xs={12} >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

            {/* submit button */}
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} >
                <Button
                  disabled={isCheckingAuthentication}
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