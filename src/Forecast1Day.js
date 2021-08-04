import React,{useState,useEffect} from 'react';
import iconpng1 from './icons/1.png';
import iconpng6 from './icons/6.png';
import iconpng7 from './icons/7.png';
import iconpng14 from './icons/14.png';
import iconpng18 from './icons/18.png';


export default function Forecast1Day({i,day,temperature,icon,description}) {

     const [img, setImg] = useState(null);
     const [dayName, setDayName] = useState(null);

     useEffect(() => {
         switch (icon) {
            case '1':
            setImg(iconpng1)
            break;
            case '6':
            setImg(iconpng6)
            break;
            case '7':
            setImg(iconpng7)
            break;
            case '14':
            setImg(iconpng14)
            break;
            case '18':
            setImg(iconpng18)
            break;
         }
    }, []) 


    useEffect(() => {
        switch (day) {
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
        }
   }, []) 
    
    

    return (
        <div>
            <div key={i}>
            <h1>{dayName}</h1>
            <h2>{temperature}</h2>
            <img src={img} alt={icon}/>
            <p>{description}</p>
            </div>
        </div>
    )
}
