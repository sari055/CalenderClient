import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import ValidatedTextField from '../../components/ValidatedTextField';
import Form from '../../components/form';
import { emailValidator, phoneValidator, requiredValidator, tzValidator } from '../../helpers/ValidationsHelper';
import { register } from '../../store/actions/auth-actions';
import SignIn from './sign-in';


const Register = ({ isRegister = true, title = "הרשמה", submitAction }) => {
  const dispatch = useDispatch();

  const formValid = useRef(isRegister ? {
    firstName: '', email: '', phoneNumber: '', groupName: '', password: '', tz: '', lastName: ''
  } : { firstName: '', email: '', phoneNumber: '', tz: '', lastName: '' });

  const initForm = isRegister ? {
    firstName: '', email: '', phoneNumber: '', groupName: '', password: '', tz: '', lastName: ''
  } : { firstName: '', email: '', phoneNumber: '', tz: '', lastName: '', fatherName:'',motherName:'' }


  const [form, setForm] = useState(initForm);

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (Object.values(formValid.current).every(isValid => isValid)) {
      const addData = { calendarId: 5, password: 'calendar' }
      const userData = !isRegister ? { ...form, isAdmin: isRegister, ...addData } : { ...form, isAdmin: isRegister }

      // if (!isRegister) {
      //   submitAction(userData);
      // }
      debugger;
      try {
        await dispatch(register(userData));
        if (!isRegister) setForm(initForm)
      }
      catch (error) {
        enqueueSnackbar(error)
      }


    }

  };

  return (
    <SignIn isRegister={isRegister} >
      <Form title={title} icon={<AppRegistrationIcon />} handleSubmit={handleSubmit}>
        <ValidatedTextField
          label="שם פרטי"
          name="firstName"
          validator={requiredValidator}
          onChange={isValid => (formValid.current.firstName = isValid)}
          setForm={updateForm}
          value={form.firstName}
          isRequired={true}
        />
        <ValidatedTextField
          label="שם משפחה"
          name="lastName"
          validator={requiredValidator}
          onChange={isValid => (formValid.current.lastName = isValid)}
          setForm={updateForm}
          value={form.lastName}
          isRequired={true}

        />
        <ValidatedTextField
          label="מייל"
          name="email"
          validator={emailValidator}
          onChange={isValid => (formValid.current.email = isValid)}
          setForm={updateForm}
          value={form.email}
          isRequired={true}

        />
        <ValidatedTextField
          label="תעודת זהות"
          name="tz"
          inputProps={{
            maxLength: 9,
            minLength: 9,
          }}
          validator={tzValidator}
          onChange={isValid => (formValid.current.tz = isValid)}
          setForm={updateForm}
          value={form.tz}
          isRequired={true}
        />
        {isRegister && <ValidatedTextField
          label="כינוי לקבוצה"
          name="groupName"
          validator={requiredValidator}
          onChange={isValid => (formValid.current.groupName = isValid)}
          setForm={updateForm}
          value={form.groupName}
          isRequired={true}
        />}
        <ValidatedTextField
          label="מס' טלפון"
          name="phoneNumber"
          inputProps={{
            maxlength: 10,
            minlength: 9,
          }}
          validator={phoneValidator}
          onChange={isValid => (formValid.current.phoneNumber = isValid)}
          setForm={updateForm}
          value={form.phoneNumber}
          isRequired={true}
        />
        {!isRegister && <ValidatedTextField
          label="שם האב"
          name="fatherName"
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
          setForm={updateForm}
          value={form.password}
          isRequired={false}
        />}
        {!isRegister && <ValidatedTextField
          label="שם האם"
          name="motherName"
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
          setForm={updateForm}
          value={form.password}
          isRequired={false}
        />}
        {isRegister && <ValidatedTextField
          label="סיסמה"
          name="password"
          validator={requiredValidator}
          onChange={isValid => (formValid.current.password = isValid)}
          setForm={updateForm}
          value={form.password}
          isRequired={true}
        />}
        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="שם פרטי"
          name="firstName"
          autoComplete="firstName"
          // autoFocus
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
          onBlur={handleRequiredChange}
          error={requiredError}
          helperText={requiredError ? 'required' : ''}
        /> */}
        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="שם משפחה"
          name="lastName"
          autoComplete="lastName"
          autoFocus
        /> */}
        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="tz"
          label="מספר זהות"
          name="tz"
          autoComplete="tz"
          autoFocus
          type="text"
          inputProps={{
            maxlength: 9,
            minlength: 9,
            pattern: "[0-9]{9}"
          }}
        /> */}
        {/* {isRegister &&
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
        } */}

        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNumber"
          label="טלפון"
          name="phoneNumber"
          autoComplete="phoneNumber"
          autoFocus
          type="tel"
          inputProps={{
            maxlength: 10,
            minlength: 9,
            pattern: { "[0-9]{3}[0-9]{2}[0-9]{3}": "[0-9]{2}[0-9]{7}" },
          }}
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
            // pattern: "/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/",
            // title: "Three letter country code"
          }}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ""}
        /> */}
        {/* {isRegister &&
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
        } */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

        >
          {isRegister ? "שמירה" : "הוסף"}
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