import userReducer from './user-reducer'
import calendarReducer from './calendar-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    calendar: calendarReducer
})

export default rootReducer;