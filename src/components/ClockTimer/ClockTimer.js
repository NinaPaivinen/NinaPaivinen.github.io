
import React, { useState, useEffect } from "react";


import { FaRegStopCircle } from "react-icons/fa";
import { MdEventBusy } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaChevronDown, FaChevronUp} from "react-icons/fa"; // Importing icons for dropdown
import { FaRegPauseCircle } from "react-icons/fa";
import { IoIosReturnLeft } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdOutlineSick } from "react-icons/md";
import { FaSave } from "react-icons/fa";

import "./CSS/clockTimer.css";

function Main() {


  const [isClocked, setIsClocked] = useState(localStorage.getItem('clocked') === 'true');
 // const [isClocked_hooks, setIsClocked_hooks] = useState(false);

  // kalenteri
  const [today, setToday] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [error, setError] = useState(false);

  // startTime
  const [startTime, setstartTime] = useState();
  const [isEditing_startTime, setIsEditing_startTime] = useState(false);

    // workingTime
    const [workingTime, setWorkingTime] = useState();
  const [isEditing_workingTime, setIsEditing_workingTime] = useState(false);

        // travelTime
        const [travelTime, setTravelTime] = useState("0 h 45 min");

        //overTime
        const [overtime, setOvertime] = useState("0 h 00 min");

        //pauseTimes
        
        const [taukoja, setTaukoja] = useState([
          { nimi: 'Ruokatauko', alku: '12:00', loppu: '12:30' },
          { nimi: 'Kahvitauko', alku: '09:00', loppu: '09:15' },
          { nimi: 'Kahvitauko', alku: '14:00', loppu: '14:15' },
        ]);
      
  const [isDropdownOpen_pause, setIsDropdownOpen_pause] = useState(false); // State for dropdown visibility

        // endTime
  const [endTime, setEndTime] = useState(); // New state for end time
  const [isEditing_endTime, setIsEditing_endTime] = useState(false);
  const [showEndOsio, setShowEndOsio] = useState(false);

  // lisä-valinnat
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [ateria, setAteria] = useState();
  const [ateria1, setAteria1] = useState();
  const [ateria2, setAteria2] = useState();
  const [ateria3, setAteria3] = useState();
  const [valittu, setValittu] = useState('(Ei valittu)');

  //************************************************** REACT HOOKS- START */


//*********start-time hooks********* */

  useEffect(() => {
    const savedTime = localStorage.getItem('startOfDay');

    if (savedTime) {
      setstartTime(savedTime);
    } else {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTimeString = `${hours}:${minutes}`;
      setstartTime(currentTimeString);
      localStorage.setItem('startOfDay', currentTimeString);
    }
  }, []);



//***********************lisä-valinnat HOOKS */

  useEffect(() => {
    const meals = [ateria, ateria1, ateria2, ateria3];
    const valittujaAterioita = meals.filter(meal => meal === true).length; // Suodatin, joka laskee true-arvot
    
    if (valittujaAterioita > 0) {
        setValittu(`(Valittu: ${valittujaAterioita})`);
    } else {
        setValittu('(Ei valittu)');
    }
}, [ateria, ateria1, ateria2, ateria3]);


//***********************endOfDay HOOKS */
useEffect(() => {
  const calculateWorkingTime = () => {

    
      const now = new Date();

      if (startTime) {
          const [startHours, startMinutes] = startTime.split(':').map(Number);
          const startTimeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes);

          const finishTime = endTime ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...endTime.split(':')) : now;
      
          const diffMilliseconds = finishTime - startTimeDate;

          const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
          const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

          const elapsedTime = `${diffHours} h ${diffMinutes} min`;
          setWorkingTime(elapsedTime);
          localStorage.setItem('workingTime', elapsedTime);

          if (diffHours > 8 || (diffHours === 8 && diffMinutes > 0)) {
              const overtimeHours = diffHours - 8;
              const overtimeMinutes = diffMinutes;
              setOvertime(`${overtimeHours} h ${overtimeMinutes} min`);
          } else {
              setOvertime("0 h 00 min");
          }
      }
  };

  calculateWorkingTime();
  const interval = setInterval(calculateWorkingTime, 60000); 

  return () => clearInterval(interval);
}, [startTime, endTime]); 





//****************************************************************************************************************************** */
  //*HOOKS END**********************functions - START */
  //********************** startTime functions - START */

  const handleClick_startTime = () => {
    setIsClocked(true);
    localStorage.setItem('clocked', true);
    localStorage.setItem('startOfDay', startTime);
};

const handleChange_startTime = (event) => {
  const newStartTime = event.target.value; 
  setstartTime(newStartTime); 
  localStorage.setItem('startOfDay', newStartTime); 
};


  const handleBlur_startTime = () => {
    setIsEditing_startTime(false);
  };

  const toggleEditing_startTime = () => {
    setIsEditing_startTime(!isEditing_startTime);
  };

  //********************** workingTime functions - START */
  const toggleEditing_workingTime = () => {
    setIsEditing_workingTime(!isEditing_workingTime);
  };

    //**************** LISÄ-extra FUNCTIOT -start */
const toggleDropdown_extra = (
) => {
    setIsDropdownOpen(prev => !prev);
};

      const handleToggle_extra = (setter) => {
        setter(prev => !prev);
    };

        //**************** tauvot FUNCTIOT -start */
const toggleDropdown_pause = (
) => {
    setIsDropdownOpen_pause(prev => !prev);
};

      const handleToggle_pause = (setter) => {
        setter(prev => !prev);
    };

    const laskeKesto = (alku, loppu) => {
      const alkuAika = new Date(`1970-01-01T${alku}:00`);
      const loppuAika = new Date(`1970-01-01T${loppu}:00`);
      const kestoMs = loppuAika - alkuAika; // Aikaero millisekunneissa
      return kestoMs / 1000 / 60; // Muutetaan minuutteihin
    };

    const tauotKestoineen = taukoja.map(tauko => ({
      ...tauko,
      kesto: laskeKesto(tauko.alku, tauko.loppu)
    }));
  

  //**************** VALMIS-lopeta päivä functions - START */
  const save = () => {
    const now = new Date();
    const formattedEndTime = now.toTimeString().split(' ')[0].slice(0, 5); 
    setEndTime(formattedEndTime);
    localStorage.setItem('endOfDay', formattedEndTime); 
    setShowEndOsio(true); 
};

const handleChange_endTime = (event) => {
  const newENDTime = event.target.value; 
  setEndTime(newENDTime); 
  localStorage.setItem('endOfDay', newENDTime);
};


const handleBlur_endTime = () => {
  setIsEditing_endTime(false);
};

const toggleEditing_endTime = () => {
  setIsEditing_endTime(!isEditing_endTime);
};

///******************* kalenteri - functions start */

const handleDayClick = (date) => {
  const currentDate = new Date();

  const selectedDate = new Date(today.getFullYear(), today.getMonth(), date);

  if (selectedDate > currentDate) {
      setError(true);
  } else {
      setError(false);
      setSelectedDay(date);
      setSelectedDate(selectedDate);  // Make sure to set the selectedDate properly here
  }
};


  const changeWeek = (offset) => {
    const newDate = new Date(today);
    newDate.setDate(newDate.getDate() + (offset * 7));
    setToday(newDate);
  };

  const handleClick_back = () =>{
    setShowEndOsio(false)
  }


///*******************tauko funcions START */
  const lisaaTauko = () => {
    const uusiTauko = { nimi: 'Tauko', alku: '15:00', loppu: '15:20' }; 
    setTaukoja([...taukoja, uusiTauko]);
};

const getTotalBreakTime = () => {
  return taukoja.reduce((total, tauko) => total + tauko.kesto, 0); // Sum all break durations in minutes
};


///******************* testing- funcions START */

const handleClick_clear = (event) => {

    localStorage.clear(); // Clear all items in localStorage
    console.log("LocalStorage cleared.");
  };

  const handleClick_consol = (event) => {
    
    console.log("LocalStorage stuff.: ", localStorage);
  };

  const Calendar = ({ today, setToday, selectedDate, selectedDay, setSelectedDay, error, handleDayClick }) => {
  
      // today on valitun viikon ensimmäinen päivä
      // selectedDay on viikonpäivän numero joka valittu
  
  
      const changeWeek = (offset) => {
          const newDate = new Date(today);
          newDate.setDate(newDate.getDate() + (offset * 7));
          setToday(newDate);
      };
  
      const renderCalendar = () => {
          const firstDayOfWeek = new Date(today);
          const dayOfWeek = firstDayOfWeek.getDay();
          const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
          firstDayOfWeek.setDate(firstDayOfWeek.getDate() - daysToSubtract);
  
          const days = [];
          const currentDate = new Date();
          const dayNames = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];
  
          for (let i = 0; i < 7; i++) {
              const currentDay = new Date(firstDayOfWeek);
              currentDay.setDate(firstDayOfWeek.getDate() + i);
              days.push(
                  <button
                      key={i}
                      onClick={() => handleDayClick(currentDay.getDate())}
                      className="button_days"
                      style={{
                          backgroundColor: currentDay.getDate() === selectedDay ? '#00a0d0' 
                              : (currentDate.getDate() === currentDay.getDate() 
                                  && currentDate.getMonth() === currentDay.getMonth() ? 'lightblue' 
                                  : 'white')
                      }}
                  >
                      {currentDay.getDate()}
                  </button>
              );
          }
  
          const weekNumber = Math.ceil((((today - new Date(today.getFullYear(), 0, 1)) / 86400000)
              + new Date(today.getFullYear(), 0, 1).getDay() + 1) / 7);
  
          const monthNames = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu",
              "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
          const month = monthNames[today.getMonth()];
  
          return (
              <div>
                  <div className="section_timer_box_container">
                      <div className="grid-item2">
                          <button className="clocker_timer_button2" onClick={() => changeWeek(-1)}>
                              <FaArrowLeft />
                          </button>
                      </div>
                      <div className="grid-item">
                          <span className="timer_time">{month}, vko {weekNumber}</span>
                      </div>
                      <div className="grid-item3">
                          <button className="clocker_timer_button2" onClick={() => changeWeek(1)}>
                              <FaArrowRight />
                          </button>
                      </div>
                  </div>
                  <div className="section_timer_box_container2">
                      <span className="time-display">
                          {dayNames.map((dayName, index) => (
                              <div key={index} className="day-name">{dayName}</div>
                          ))}
                      </span>
                      <span className="clocker_days">
                          {days}
                      </span>
                  </div>
                  {error ? (
                      <span style={{ color: 'red' }}>
                          <p>Et voi merkitä tulevia päiviä!</p>
                      </span>
                  ) : (
                      <span>    
                          {`Valittu: ${selectedDate.toLocaleDateString('fi-FI', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                      })}`}
                      </span>
                  )}
              </div>
          );
      };
  
      return renderCalendar();
  };
  
//****************************************************************************************************************************** */
//*************JSX- START */
  return (
    <div className="section_clock_timer section">

      
    <div className="section_clock_container">
    {showEndOsio ? (
    <div className="section_end">
        <button className="clocker_timer_button2" onClick={handleClick_back}>
    <IoIosReturnLeft /> PALAA TAKAISIN
    </button>
      <h4>Päivän päätös</h4>
    
    </div>
) :
 <h4>Kellokortti</h4>
}

      
 {/*****************************KALENTERI NÄKYMÄ -START *************************************/}

 <Calendar 
    today={today} 
    selectedDate={selectedDate}  
    setToday={setToday} 
    selectedDay={selectedDay} 
    setSelectedDay={setSelectedDay} 
    error={error} 
    handleDayClick={handleDayClick} 
/>

 {/*****************************KALENTERI NÄKYMÄ-END *************************************/}

 {/*****************************TYÖMAALLE KIRJAANTUMINEN KELLON-AIKA-START *************************************/}
 {isClocked ? 
 <div>

 {/****hided clock in site********/}
      </div>
      :
      <div>

      </div>
        }
      
 {/*****************************TYÖMAALLE KIRJAANTUMINEN KELLO-AIKA - END *************************************/}

  {/*****************************WORKING TIME - START *************************************/}
  {isClocked ? 
  <div>
    {showEndOsio ? (
<span className="section_timer_box_container3"></span>
    ) :   <div className="section_timer_box_container3">
    <p></p>
         <h6  className="timer_h1">Työaika</h6>

         <div className="section_timer_box_container">
       

       <div className="grid-item2">
         <button className="clocker_timer_lapinak2" >
         <GoClock />
         </button>
       </div>
       <div className="grid-item">
       {isEditing_workingTime ? (
       <input 
         type="time" 
         value={startTime} 
         onChange={handleChange_startTime} 
         onBlur={handleBlur_startTime} 
       />
     )  : (
    
<span className="clock_time">

                   <div>
                       <span className="clock_time">{workingTime}</span>
                   </div>
</span>
     )}
   </div>

   
   <div className="grid-item3">
       
       <div onClick={toggleEditing_workingTime}>
     {isEditing_workingTime ? 
              <button className="clocker_timer_lapinak">
             <FaSave />
              </button>
               : 
      <button className="clocker_timer_lapinak">
       <FaRegEdit />
       </button>}
   </div>
     </div>
   
   </div>
     <p></p>
     

     <div className="section_timer_box_container_button_box">

     <button className="clocker_timer_button_grey banned">
       <FaRegPauseCircle />
       TAUKO</button>

     <button onClick={save}
     className="clocker_timer_button_red"><FaRegStopCircle />PÄÄTÄ TYÖPÄIVÄ</button>
       </div>  
   </div>}
        
        {/******************MATKUSTUS-AIKA START*/}
          <div className="timer_end_box-time2">

    <h6  className="timer_h1">Matkustusaika</h6>
    <p></p>
      <div className="section_timer_box_container">
        

        <div className="grid-item2">
          <button className="clocker_timer_lapinak2" >
          <GoClock />
          </button>
        </div>
        <div className="grid-item">
        <div>
                        <span className="clock_time">{travelTime}</span>
                    </div>
    </div>

    
    <div className="grid-item3">
        
        <div onClick={toggleEditing_startTime}>
        <button className="clocker_timer_lapinak banned">
        <FaRegEdit />
        </button>
    </div>
      </div>
    
    </div>
      <p></p>
    </div>

    {/*****************************lisävalinnat START*/}

        <p></p>
<button className="clocker_timer_button_grey" onClick={toggleDropdown_extra} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    Lisäextra {valittu}
    {isDropdownOpen ? <FaChevronUp style={{ marginLeft: '8px' }} /> : <FaChevronDown style={{ marginLeft: '8px' }} />}
</button>

{isDropdownOpen && (
    <div>
        <div className="settings_inputGroup">
            <label className="settings_label">Ateriakorvaus </label>
            <button type="button" onClick={() => handleToggle_extra(setAteria, ateria)}
                className={`settings_toggle ${ateria ? 'button-yes' : 'button-no'}`}>
                {ateria ? 'Kyllä' : 'Ei'}
            </button> 
        </div>
        <p></p>
        <div className="settings_inputGroup">
            <label className="settings_label">Kokopäiväraha </label>
            <button type="button" onClick={() => handleToggle_extra(setAteria1, ateria1)}
                className={`settings_toggle ${ateria1 ? 'button-yes' : 'button-no'}`}>
                {ateria1 ? 'Kyllä' : 'Ei'}
            </button> 
        </div>
        <p></p>
        <div className="settings_inputGroup">
            <label className="settings_label">Osapäiväraha</label>
            <button type="button" onClick={() => handleToggle_extra(setAteria2, ateria2)}
                className={`settings_toggle ${ateria2 ? 'button-yes' : 'button-no'}`}>
                {ateria2 ? 'Kyllä' : 'Ei'}
            </button> 
        </div>
        <p></p>
        <div className="settings_inputGroup">
            <label className="settings_label">Sairastui kesken päivän</label>
            <button type="button" onClick={() => handleToggle_extra(setAteria3, ateria3)}
                className={`settings_toggle ${ateria3 ? 'button-yes' : 'button-no'}`}>
                {ateria3 ? 'Kyllä' : 'Ei'}
            </button> 
        </div>
        <p></p>
    </div>
)}

 {/**************lopetus sivu********************/}
 {showEndOsio && (
  <div>
      <div className="section_timer_box_container3">
     <p></p>
          <h6  className="timer_h1">Aloitusaika</h6>

          <div className="section_timer_box_container">
        

        <div className="grid-item2">
          <button className="clocker_timer_lapinak2" >
          <GoClock />
          </button>
        </div>
    
        <div className="grid-item">
      {isEditing_startTime ? (
        <input 
          type="time" 
          value={startTime} 
          onChange={handleChange_startTime} 
          onBlur={handleBlur_startTime} 
        />
      ) : (
        <span className="clock_time">{startTime}</span>
      )}
    </div>
    
        <div className="grid-item3">
        
          <div onClick={toggleEditing_startTime}>
        {isEditing_startTime ? 
                 <button className="clocker_timer_lapinak">
                <FaSave />
                 </button>
                  : 
         <button className="clocker_timer_lapinak">
          <FaRegEdit />
          </button>}
      </div>
        </div>
    
    </div>
<p></p>
          <h6  className="timer_h1">Lopetusaika</h6>

          <div className="section_timer_box_container">
        

        <div className="grid-item2">
          <button className="clocker_timer_lapinak2" >
          <GoClock />
          </button>
        </div>
    
        <div className="grid-item">
      {isEditing_endTime ? (
        <input 
          type="time" 
          value={endTime} 
          onChange={handleChange_endTime} 
          onBlur={handleBlur_endTime} 
        />
      ) : (
        <span className="clock_time">{endTime || "23:59"}</span>
      )}
    </div>
    
        <div className="grid-item3">
        
          <div onClick={toggleEditing_endTime}>
        {isEditing_endTime ? 
                 <button className="clocker_timer_lapinak">
                <FaSave />
                 </button>
                  : 
         <button className="clocker_timer_lapinak">
          <FaRegEdit />
          </button>}
      </div>
        </div>
    
    </div>



      <p></p>
      
      <button className="clocker_timer_button_grey" onClick={toggleDropdown_pause} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
Tauvot
    {isDropdownOpen_pause ? <FaChevronUp style={{ marginLeft: '8px' }} /> : <FaChevronDown style={{ marginLeft: '8px' }} />}
</button>

{isDropdownOpen_pause && (
                <div>
                    <span>
                    <ul>
        {tauotKestoineen.map((tauko, index) => (
          <li key={index}>
            {tauko.nimi}: {tauko.alku} - {tauko.loppu} ({tauko.kesto} minuuttia)
          </li>
        ))}
      </ul>
                    </span>
                    <button onClick={lisaaTauko}>+</button>
                </div>
            )}
    </div>
    
    <div className="timer_end_box-time">
      <h6 className="timer_h1">Työaika päivältä</h6>
      <p></p>
      <span className="clock_time">{workingTime}</span>
      <p></p>
     Ylityöt: <span className="clock_time2">{overtime}</span> {/* Display overtime */}
      <p></p>
    </div>

    <button className="clocker_timer_button banned">
      <MdOutlineDoneOutline /> VALMIS
    </button>
  </div>
)}

 {/**************TEST-BUTTONS********************/}
 <div className="consol">
<p></p>
        <button className="clocker_timer_grey1" onClick={handleClick_clear}>
   CLEAR localStorage
    </button>
<p></p>
    <button className="clocker_timer_grey1" onClick={handleClick_consol}>
      GET localStorage
    </button>
    <p></p>
    </div>
 {/**************TEST-END********************/}
      </div>
      :
      
      <div>
        
 {/*************ei-aloittanut vielä kellonaikaa päivälle - start ******************/}

 <div>
      <div className="section_timer_box_container3">
     <p></p>
          <h6  className="timer_h1">Aloitusaika</h6>

          <div className="section_timer_box_container">
        

        <div className="grid-item2">
          <button className="clocker_timer_lapinak2" >
          <GoClock />
          </button>
        </div>
    
        <div className="grid-item">
      {isEditing_startTime ? (
        <input 
          type="time" 
          value={startTime} 
          onChange={handleChange_startTime} 
          onBlur={handleBlur_startTime} 
        />
      ) : (
        <span className="clock_time">{startTime}</span>
      )}
    </div>
    
        <div className="grid-item3">
        
          <div onClick={toggleEditing_startTime}>
        {isEditing_startTime ? 
                 <button className="clocker_timer_lapinak">
                <FaSave />
                 </button>
                  : 
         <button className="clocker_timer_lapinak">
          <FaRegEdit />
          </button>}
      </div>
        </div>
    
    </div>




      <p></p>
      
    </div>

      
 <button className="clocker_timer_button" onClick={handleClick_startTime}>
      <FaRegPlayCircle /> Aloita työpäivä
    </button>
    <p></p>

    <button className="clocker_timer_button_grey1" >
    <MdOutlineSick /> Sairaana
    </button>
    <p></p>

    <button className="clocker_timer_button_grey1">
    <MdEventBusy /> Poissa
    </button>
      </div>
      
      </div>
        }

      
  {/*****************************START-END *************************************/}


    </div>
    
<div>
  
</div>

    </div>
  );
}

export default Main;
