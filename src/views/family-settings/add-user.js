
import React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Form from '../../components/form';
import { Button } from '@mui/material';


const AddParent = () => {
  
    return (

        <Form >
            
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
         <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
        עדכן בן משפחה
        </Button>
      </Form>

    );
}

export default AddParent;
