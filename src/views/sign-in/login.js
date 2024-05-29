import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Form from '../../components/form';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth-actions';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import SignIn from './sign-in';



export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target)
    const { email, password } = Object.fromEntries(data.entries())
    dispatch(login(email, password));
  };

  return (
    <SignIn>
      <Form title="כניסה" icon={<LockOutlinedIcon />} handleSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="שם משתמש"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="סיסמה"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          כניסה
        </Button>
        <Grid container>
          <Grid xs>
            <Link component={RouterLink} to="/forgot-password-form" variant="body2">
             שכחת סיסמה?   
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/register" variant="body2">
              {"אין לך חשבון? הירשם"}
            </Link>
          </Grid>
        </Grid>
      </Form>
    </SignIn>
  );
}