import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCalendarUsers } from "../../store/actions/calendar-actions";
import UserView from "./user-view";

const FamilySettings = () => {
    const dispatch = useDispatch();
    const siteUser = useSelector(state => state.user);
    const { calendars } = useSelector(state => state.calendar);
    const [activeCalendar, setActiveCalendar] = useState();
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        setActiveCalendar(calendars?.find(cal => cal.active));
        console.log("calendar: ",calendars);
    }, [calendars])

    useEffect(() => {
        if (activeCalendar) {
            if (!activeCalendar.users || !activeCalendar.users.length) {
                dispatch(getCalendarUsers(activeCalendar.id));
            }
            setUsers(activeCalendar.users);
        }
        // Fetch users if active calendar is available but users array is empty or undefined
    }, [activeCalendar, dispatch]);

    useEffect(() => {
        debugger
        if (users && users.length > 0) {
            setCurrentUser(users.find(u => u.siteUserId === siteUser.user.id))
            console.log("users: ",users);
        }
    }, [users, siteUser])

    return (
        <>
            {currentUser && <UserView user={currentUser} />}
        </>
    );
}

export default FamilySettings;
