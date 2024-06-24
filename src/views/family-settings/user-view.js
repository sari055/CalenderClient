import React, { useEffect, useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WcIcon from '@mui/icons-material/Wc';
import FileUpload from "../../components/file-upload";
import FileService from "../../services/FileService";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Chip, Divider, FormControlLabel } from "@mui/material";
import UserImage from "./user-image";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from "../../components/header";
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import AddParent from './add-user'
import TextField from '@mui/material/TextField';
import Form from "../../components/form";
import { Button } from "@mui/material";
// import EditDetails from "../edit-details/edit-details";
import { useDispatch, useSelector } from "react-redux";
import ValidatedTextField from "../../components/ValidatedTextField";
import { emailValidator, phoneValidator } from "../../helpers/ValidationsHelper";
import { editDetails } from "../../store/actions/user-action";

// import StyledHeader from "../../components/header";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: '100%',
// }));

// const TitleBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.common.white,
//   height: 'calc(33vh - 16px)', // Adjust height as needed
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const UserView = ({ user, users }) => {
    const handleButtonClick = () => {
        // Call the AddParent component logic here
        console.log('Button clicked'); // Just for demonstration
        AddParent(); // Activate the AddParent component
    }
    const dispatch = useDispatch();

    const emptyUser = { firstName: 'אין', lastName: 'מידע' }
    const [imgUrl, setImgUrl] = useState();
    const [father, setFathar] = useState(emptyUser);
    const [mother, setMother] = useState(emptyUser);
    const [spouse, setSpouse] = useState(emptyUser);
    const [form, setForm] = useState(user);
    const [label, setLabel] = useState("עדכון פרטים");
    const [dis, setDis] = useState(true);
    const calendar = useSelector(state => state.calendar?.calendars);

    const formValid = useRef({
        email: '', phoneNumber: ''
    });

    useEffect(() => {
        if (user && user.tz) {
            setImgUrl(FileService.getImageUrl(user.tz))
        }
    }, [user])

    useEffect(() => {
        setFathar(getUserById(user?.fatherId))
        setMother(getUserById(user?.motherId))
        setSpouse(getUserById(user?.spouseId))
    }, [user, users])

    const getUserById = (userId) => {
        if (userId == null || !users || !users.length)
            return emptyUser;
        return users.find(u => u.id === userId);
    }

    const updateForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const onSubmit = () => {
        const details = {
            Id: user?.id,
            SiteUserId: user?.SiteUserId,
            TZ: user?.tz,
            FirstName: user?.firstName[0],
            LastName: user?.lastName[0],
            BornDate: user?.BornDate,
            SpouseId: user?.SpouseId,
            FatherId: user?.FatherId,
            MotherId: user?.MotherId,
            PhoneNumber: form?.phoneNumber,
            Email: form?.email,
            SiteUser: user?.SiteUser,
            Spouse: user?.Spouse,
            Father: user?.Father,
            Mother: user?.Mother,
            CalendarUsers: user?.CalendarUsers,
        }
        return details;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (label == 'עדכון פרטים') {
            setLabel('שמור');
            setDis(false)
        }
        else dispatch(editDetails(onSubmit()))

    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {/* <Header title={"פרטי צאצא"}/> */}
            </Grid>
            <Grid item xs={8}>
                <Grid item>
                    <Typography gutterBottom variant="h5" component="div">
                        שם צאצא:
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                        {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>אב: {father.firstName} {father.lastName}</Typography>
                    <Typography variant="body1" gutterBottom>אם: {mother.firstName} {mother.lastName}</Typography>
                    <Typography variant="body1" gutterBottom>בן זוג: {spouse.firstName} {spouse.lastName}</Typography>
                    {/* <EditDetails /> */}
                    {/* <Form handleSubmit={handleSubmit}> */}
                    <Divider>
                        <Chip label="פרטי יצירת קשר" size="small" />
                    </Divider>

                    <Grid container alignItems="center" spacing={3} sx={{ justifyContent: 'center', padding: 4 }}>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <CallIcon />
                                </Grid>
                                <Grid item>
                                    {/* <Typography variant="body1" color="text.secondary">
                                        {user.phoneNumber}
                                    </Typography> */}
                                    {/* <form > */}
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
                                        isDisabled={dis}
                                    />
                                    {/* </ form> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <EmailIcon />
                                </Grid>
                                <Grid item>
                                    <ValidatedTextField
                                        label="מייל"
                                        name="email"
                                        validator={emailValidator}
                                        onChange={isValid => (formValid.current.email = isValid)}
                                        setForm={updateForm}
                                        value={form.email}
                                        isRequired={true}
                                        isDisabled={dis}
                                    />
                                    {/* <Typography variant="body1" color="text.secondary">
                                        {user.email}
                                    </Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider>
                        <Chip label={label} size="large" onClick={handleSubmit} />
                    </Divider>
                    <CardActions sx={{ justifyContent: 'center' }}>

                        {/* //todo: disable link if Editor */}
                        {/* {calendar[0]?.calendarUsers?.UserType === 'Admin' && */}
                        <Link component={RouterLink} to="/add-user" >
                            <Fab color="primary" variant="extended" size="large" sx={{ borderRadius: '50%', width: '80px', height: '80px', mr: 2 }}>
                                <GroupAddIcon sx={{ mr: 1 }} />
                                הוספת בן משפחה
                            </Fab>
                        </Link>
                        {/* } */}


                        {/* 
                        <Fab  color="primary" variant="extended" size="large" sx={{ borderRadius: '50%', width: '80px', height: '80px', mr: 2 }}>
                            <FaceRetouchingNaturalIcon sx={{ mr: 1 }} />
                            הוספת ילד/ה
                        </Fab>
                        <Fab  color="primary" variant="extended" size="large" sx={{ borderRadius: '50%', width: '80px', height: '80px' }}>
                            <WcIcon sx={{ mr: 1 }} />
                            הוספת בן זוג
                        </Fab> */}
                        <Link component={RouterLink} to="/add-event">
                            <Button variant="contained" disableElevation>
                                הוספת ארוע               </Button>
                        </Link>
                    </CardActions>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid item>
                    <UserImage imgUrl={imgUrl} />
                </Grid>
            </Grid>
        </Grid>

    )
}
export default UserView;
