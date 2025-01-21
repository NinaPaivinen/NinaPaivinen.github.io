
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import CalendarComponent from './CalendarComponent.js';
import ClockInComponent from './ClockInComponent.js';
import ElapsedTimeComponent from './ElapsedTimeComponent.js';
import TravelTimeComponent from './TravelTimeComponent.js';
import AdditionalCompensationComponent from './AdditionalCompensationComponent.js';

import "./CSS/clockTimer.css";

function Main() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isClocked, setIsClocked] = useState(localStorage.getItem('clocked') === 'true');
  const [ateria, setAteria] = useState();
  const [ateria1, setAteria1] = useState();
  const [ateria2, setAteria2] = useState();
  const [ateria3, setAteria3] = useState();
  const [valittu, setValittu] = useState('(Ei valittu)');
const [selectedDate, setSelectedDate] = useState(new Date());
const [selectedDay, setSelectedDay] = useState(new Date().getDate()); 
  const [error, setError] = useState(false);
  const [startTime, setstartTime] = useState(() => {
    const savedTime = localStorage.getItem('startOfDay');
    return savedTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });});
const [elapsedTime, setElapsedTime] = useState(0);  
const [formatElapsedTime, setFormatElapsedTime] = useState(new Date().getDate()); 
const [workingTime, setworkingTime] = useState('');
const navigate = useNavigate(); 
const [isEditing_startTime, setisEditing_startTime] = useState(false);

  //********************* REACT - HOOKS -START****************** */

 //**** USE-EFFECT CODE HERE
 //  */ useEffect(() => {


  //********************* FUNCTIONS -START****************** */

......

  //********************* FUNCTIONS -END ****************** */
  //********************* JSX - START ****************** */
  return (
    <div className="section_clock_timer section">
        <div className="section_clock_container">
            <h4>Kellokortti</h4>
            <CalendarComponent 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                selectedDay={selectedDay} 
                setSelectedDay={setSelectedDay} 
                error={error} 
                handleDayClick={handleDayClick} 
            />
            <ClockInComponent 
                isEditingTime={isEditing_startTime}
                timeString={startTime}
                handleTimeChange={handleChange3}
                handleBlur={handleBlur3}
                toggleEditing={toggleEditing_workingTime}
                onClockIn={handleClick}
            />
            <ElapsedTimeComponent 
                formatElapsedTime={formatElapsedTime}
                isClocked={isClocked}
                onStartWorkDay={handleClick}
                onEndWorkDay={save}
            />
            <TravelTimeComponent 
                formatElapsedTime={formatElapsedTime}
            />
            <AdditionalCompensationComponent 
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                valittu={valittu}
                ateriakorvaus={ateria}
                setAteria={setAteria}
                kokopäiväraha={ateria1}
                setAteria1={setAteria1}
                osapäiväraha={ateria2}
                setAteria2={setAteria2}
                sairaana={ateria3}
                setAteria3={setAteria3}
            />
        </div>
    </div>
);
}


export default Main;