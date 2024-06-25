import userReducer from './user-reducer'
import calendarReducer from './calendar-reducer';
import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';

const rootReducer = combineReducers({
    user: userReducer,
    calendar: calendarReducer,
    events: eventsReducer
})

export default rootReducer;