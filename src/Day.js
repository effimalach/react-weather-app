import React,{useState,useEffect} from 'react';


function Day(props) {

    const [dayName, setDayName] = useState(null);


    useEffect(() => {
        switch (props.day) {
            case 0:
                setDayName('Sunday')
                break;
              case 1:
                setDayName('Monday')
                break;
              case 2:
                setDayName('Tuesday')
                break;
              case 3:
                setDayName('Wednesday')
                break;
              case 4:
                setDayName('Thursday')
                break;
              case 5:
                setDayName('Friday')
                break;
              case 6:
                setDayName('Saturday')
                break;
              default:
                break;
        }
   }, [props.day]) 

   



    return (
        <div className="dayWeather">
            <h1>{dayName}</h1>
        </div>
    )
}

export default Day
