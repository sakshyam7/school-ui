// Calendar.jsx
import React from 'react';
import './Calendar.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h2 className="main-heading">Calendar</h2>
        <div className="calender-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <h3 className="events-heading">Events</h3>
        <div className="events-container">
          <div className="event">
            <div className="event-info">
              <h5>June 5 Parent's Meeting</h5>
              <p></p>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <h5>June 10 Class Test</h5>
              <p></p>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <h5>June 15 Sport Weeks Starts</h5>
              <p></p>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <h5>June 22 Sport Weeks Ends</h5>
              <p></p>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <h5>July 5 Essay Writing Competition</h5>
              <p></p>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <h5>July 15 Exam Starts</h5>
              <p></p>
            </div>
          </div>
          {/* Add other events similarly */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
