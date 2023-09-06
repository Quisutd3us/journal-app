import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Edit, Google, WineBarTwoTone } from "@mui/icons-material";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title={'Register'}>
        <form>
          <Grid
            container
          >
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'Your Name'}
                type={'text'}
                placeholder={'Jhon Doe'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'email'}
                type={'email'}
                placeholder={'miemail@mail.com'}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label={'password'}
                type={'password'}
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ m: 2 }}>
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  <Edit />
                  <Typography sx={{ ml: 1 }}>Register</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={'row'} justifyContent={'end'} >
              <Typography sx={{mr:1}} >Are you Register?</Typography>
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