import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Form from '../../components/form';
import { Button } from '@mui/material';
import { NativeSelect } from '@mui/material'
import { InputLabel, FormControl, Select, MenuItem, Box } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from '@mui/icons-material/Event';
import dayjs from 'dayjs';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';


const AddEvent = () => {

  const [eventDate, setEventDate] = React.useState(dayjs());
  const [eventType, setEventType] = React.useState('');
  const [oneTimeEvent, setOneTimeEvent] = React.useState(true)
  const tzEvent = useSelector(state => state.events.tzEventByaddUser);

  const handleDateChange = (e) => {
    setEventDate(e)
  }
  const handleTypeChange = (event) => {



    setEventType(event.target.value);

  };


  return (

    <Form icon={<EventIcon />} >
      <TextField
        margin="normal"
        required
        fullWidth
        id="eventOwnerName"
        label="שם בעל הארוע"
        name="eventOwnerName"
        autoComplete="eventOwnerName"
        autoFocus
        inputProps={{
          pattern: "[A-Za-z ]+",
        }}

      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="tzOwnerName"
        label="תז בעל הארוע"
        name="eventOwnerName"
        autoComplete="tzOwnerName"
        autoFocus
        value={tzEvent}
        disabled={tzEvent ? true : false}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">סוג ארוע</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={eventType}
            label="סוג ארוע"
            onChange={handleTypeChange}
          >
            <MenuItem value={10}>יום הולדת</MenuItem>
            <MenuItem value={20}>יום נישואין</MenuItem>
            <MenuItem value={30}>יום השנה</MenuItem>
            <MenuItem value={40}>ארוע מיוחד</MenuItem>

          </Select>
        </FormControl>

      </Box>
      {eventType === 40 && (
        <div>
          <TextField
            margin="normal"
            required
            fullWidth
            id="event"
            label="ארוע מיוחד"
            name="event"
            autoComplete="event"
            autoFocus
            type="text"
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked value={oneTimeEvent} onChange={() => setOneTimeEvent(false)} />} label="ארוע לשנה נוכחית בלבד" />
          </FormGroup>
        </div>

      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="תאריך ארוע"
            fullWidth
            value={eventDate}
            id="date"
            name="date"
            autoComplete="date"
            onChange={handleDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        הוסף ארוע ללוח
      </Button>
      {tzEvent &&
        <Grid item xs>
          <Link component={RouterLink} to="/add-user" variant="body2">
          <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                {"הוספת בן משפחה"}
              </Button>
          </Link>
        </Grid>
      }
    </Form>

  );
}

export default AddEvent;
