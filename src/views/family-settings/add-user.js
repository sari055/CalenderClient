// const handleSubmit = async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target)
//   const data = Object.fromEntries(formData.entries())

//   if (!isRegister) {
//     submitAction(data);
//   }

//   try {
//     dispatch(register(data));
//   }
//   catch (error) {
//     enqueueSnackbar(error)
//   }

// };

import React from 'react';
import TextField from '@mui/material/TextField';
import Form from '../../components/form';
import { Button, Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth-actions';
import { enqueueSnackbar } from 'notistack';
import Register from '../sign-in/register';
import { Link as RouterLink, Link } from 'react-router-dom';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


const AddParent = () => {

  const dispatch = useDispatch();
  const globalPassword = 'calendar'
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target)
  //   const data = Object.fromEntries(formData.entries())
  //   const userData = { ...data, isAdmin: false, calendarId: 5, password: 'globalPassword' }
  //   try {
  //     dispatch(register(userData));
  //   }
  //   catch (error) {
  //     enqueueSnackbar(error)
  //   }

  // }

  return (
    <>
      <Register isRegister={false} title='הוסף בן משפחה' />
      {/* //todo: disable link if Editor */}
      {/* {calendar[0]?.calendarUsers?.UserType === 'Admin' && */}

      {/* <Link component={RouterLink} to="/home/family/settings">
        <Button variant="contained" disableElevation>
          חזור
        </Button>
      </Link> */}
    </>
    // {/* } */ }
    // <Form handleSubmit={handleSubmit}>
    //   {/* {user.father? <div className='father' style={{color:'red'}}>{user.father}</div> :null} */}

    //   {/* {user.father? <div className='father' style={{color:'red'}}>{user.father}</div> :null} */}
    //   <TextField
    //     margin="normal"
    //     required
    //     fullWidth
    //     id="firstName"
    //     label="שם פרטי"
    //     name="firstName"
    //     autoComplete="firstName"
    //     autoFocus
    //     inputProps={{
    //       pattern: "[A-Za-z ]+",
    //     }}
    //   />
    //   <TextField
    //     margin="normal"
    //     //  required
    //     fullWidth
    //     id="fatherName"
    //     label="שם האב"
    //     name="fatherName"
    //     autoComplete="fatherName"
    //     autoFocus
    //     inputProps={{
    //       pattern: "[A-Za-z ]+",
    //     }}
    //   /> <TextField
    //     margin="normal"
    //     // required
    //     fullWidth
    //     id="motherName"
    //     label="שם האם"
    //     name="motherName"
    //     autoComplete="motherName"
    //     autoFocus
    //     inputProps={{
    //       pattern: "[A-Za-z ]+",
    //     }}
    //   />
    //   <TextField
    //     margin="normal"
    //     required
    //     fullWidth
    //     id="lastName"
    //     label="שם משפחה"
    //     name="lastName"
    //     autoComplete="lastName"
    //     autoFocus
    //   />
    //   <TextField
    //     margin="normal"
    //     required
    //     fullWidth
    //     id="tz"
    //     label="מספר זהות"
    //     name="tz"
    //     autoComplete="tz"
    //     autoFocus
    //     type="number"
    //   />
    //   <TextField
    //     margin="normal"
    //     required
    //     fullWidth
    //     id="email"
    //     label="מייל"
    //     type="email"
    //     name="email"
    //     autoComplete="email"
    //     autoFocus
    //     inputProps={{
    //       type: "email",
    //     }}
    //   />
    //   <Button
    //     type="submit"
    //     fullWidth
    //     variant="contained"
    //     sx={{ mt: 3, mb: 2 }}
    //   >
    //     עדכן בן משפחה
    //   </Button>
    // </Form>

  );
}

export default AddParent;
