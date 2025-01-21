// components/ElapsedTimeComponent.js
import React from 'react';
import { FaRegPauseCircle, FaRegStopCircle, FaRegPlayCircle } from "react-icons/fa";

const ElapsedTimeComponent = ({ formatElapsedTime, isClocked, onStartWorkDay, onEndWorkDay }) => {
    return (
        <div>
            <h6 className="timer_h1">Työaika</h6>
            <span className="clock_time">{isClocked ? formatElapsedTime : (
                <button className="clocker_timer_button" onClick={onStartWorkDay}>
                    <FaRegPlayCircle /> Aloita työpäivä
                </button>
            )}</span>
            <div className="section_timer_box_container_button_box">
                <button className="clocker_timer_button_grey"><FaRegPauseCircle />TAUKO</button>
                {isClocked && (
                    <button onClick={onEndWorkDay} className="clocker_timer_button_red">
                        <FaRegStopCircle />PÄÄTÄ TYÖPÄIVÄ
                    </button>
                )}
            </div>
        </div>
    );
};

export default ElapsedTimeComponent;
