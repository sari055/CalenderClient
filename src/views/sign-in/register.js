import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Form from '../../components/form';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth-actions';
import { Link as RouterLink } from 'react-router-dom';
import SignIn from './sign-in';
import { enqueueSnackbar } from 'notistack';


const Register = ({ isRegister = true, title = "הרשמה", submitAction }) => {

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    const userData = { ...data, isAdmin: true }
    if (!isRegister) {
      submitAction(userData);
    }

    try {
      dispatch(register(userData));
    }
    catch (error) {
      enqueueSnackbar(error)
    }

  };

  return (
    <SignIn>
      <Form title={title} icon={<AppRegistrationIcon />} handleSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="שם פרטי"
          name="firstName"
          autoComplete="firstName"
          autoFocus
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="שם משפחה"
          name="lastName"
          autoComplete="lastName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="tz"
          label="מספר זהות"
          name="tz"
          autoComplete="tz"
          autoFocus
          type="number"
        />
        {isRegister &&
          <TextField
            margin="normal"
            required
            fullWidth
            id="groupName"
            label="כינוי לקבוצה"
            name="groupName"
            autoComplete="groupName"
            autoFocus
          />
        }

        <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNumber"
          label="טלפון"
          name="phoneNumber"
          autoComplete="phoneNumber"
          autoFocus
          type="tel"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="מייל"
          type="email"
          name="email"
          autoComplete="email"
          autoFocus
          inputProps={{
            type: "email",
          }}
        />
        {isRegister &&
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
        }
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          שמירה
        </Button>
        {isRegister &&
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                {"יש לך חשבון? היכנס"}
              </Link>
            </Grid>
          </Grid>
        }
      </Form>
    </SignIn>
  );
}

export default Register;