import React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Form from '../../components/form';
import { Button } from '@mui/material';
import {NativeSelect} from '@mui/material'
import { InputLabel,FormControl,Select ,MenuItem,Box}from '@mui/material';
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


const AddEvent = () => {

  const [eventDate,setEventDate]=React.useState(dayjs());
  const [eventType, setEventType] = React.useState('');
  const [oneTimeEvent,setOneTimeEvent] =React.useState(true)


const handleDateChange =(e) =>{
  setEventDate(e)
}
  const handleTypeChange = (event) => {
    
    

   setEventType(event.target.value);

  };


    return (
      
        <Form  icon={<EventIcon />} >
          
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
    {eventType === 40 &&(
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
    <FormControlLabel control={<Checkbox defaultChecked value={oneTimeEvent}  onChange={()=>setOneTimeEvent(false)}/>} label="ארוע לשנה נוכחית בלבד" />
  </FormGroup>
</div>
        
  )  }
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
        label="תאריך ארוע" 
        value={eventDate}
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
      
      </Form>

    );
}

export default AddEvent;
