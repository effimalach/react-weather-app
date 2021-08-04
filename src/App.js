import React,{useState,useEffect} from 'react'
import Forecast1Day from './Forecast1Day';

import './App.css';


function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
      fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
      .then(res=>res.json())
      .then(data=>setWeather(data))
  }, []);

  return (
    <div className="App">
      {weather.map((dayWeather,index)=> {
         //  console.log(dayWeather[property])
       return <Forecast1Day i={index} day={dayWeather.day} temperature={dayWeather.temperature} icon={dayWeather.icon} description={dayWeather.description} />
      })}
    </div>
  );
}

export default App;
