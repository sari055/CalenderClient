import { enqueueSnackbar } from 'notistack';
import CalendarService from '../../services/CalendarService';
import { SET_CALENDAR_USERS, SET_CURRENT_CALENDAR, SET_USER_CALENDARS } from '../types/calendar-types';

export function setCalendars(calendars) {
  return {
    type: SET_USER_CALENDARS,
    payload: calendars
  }
}

export function setCurrentCalendar(calendarId) {
  return {
    type: SET_CURRENT_CALENDAR,
    payload: calendarId
  }
}

export function setCalendarUsers(calendarId, users) {
  return {
    type: SET_CALENDAR_USERS,
    payload: {calendarId, users}
  }
}

export const getCalendars = () => async dispatch => {
  try {
    const response = await CalendarService.getCalendars();
    const {data} = response;
    if(data) {
      dispatch(setCalendars(data))
      dispatch(setCurrentCalendar(data[0]))
    }
  } 
  catch (error) {
    enqueueSnackbar(`error: ${error}`, { variant: "error" });
  }
}

export const getCalendarUsers = (calendarId) => async dispatch => {
  try {
    const response = await CalendarService.getCalendarUsers(calendarId);
    const {data} = response;
    if(data) {
      dispatch(setCalendarUsers(calendarId, data))
    }
  } 
  catch (error) {
    enqueueSnackbar(`error: ${error}`, { variant: "error" });
  }
}
