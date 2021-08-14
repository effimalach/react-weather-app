import React from 'react';

import Icon from './Icon.js';
import Day from './Day.js';

import './Forecast1Day.css'





export default function Forecast1Day({temperature,icon,description,day}) {

    return (

        <div className="weatherBox">
            <Day day={day}/>
            <div className="temp"> <h2>{temperature}</h2></div>
            <Icon  icon={icon} />
            <p className="desc">{description}</p>
        </div>

    )
}
