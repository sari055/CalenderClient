import React, { useEffect } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCalendars } from "../../store/actions/calendar-actions";
import Footer from "./footer";

const HomePage = () => {
    const {calendars} = useSelector(state => state.calendar);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!calendars || !calendars.length){
            dispatch(getCalendars());
        }
    }, [calendars, dispatch])

    return (
        <>
            <Navbar/>
            <Outlet/> 
            <Footer/>
        </>
    );
}

export default HomePage;