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
  return(
             <Forecast1Day key={index}  temperature={dayWeather.temperature} 
             icon={dayWeather.icon} day={dayWeather.day}  description={dayWeather.description} />  
  ) 
      })}
    </div>
  );
}

export default App;
