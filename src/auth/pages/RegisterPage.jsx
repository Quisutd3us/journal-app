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

const formValidations = {
  displayName: [(value) => value.length >= 1, 'The Name is Required'],
  email: [(value) => value.includes('@'), 'The email value must be have the @ character'],
  password: [(value) => value.length >= 6, 'The password must be have more than 6 characters']
};

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange,
    validForm, displayNameValid, emailValid, passwordValid
  } = useForm(initialForm,formValidations);

  console.log(validForm)

  const handleOnSubmit = (e) => {
    e.preventDefault();
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