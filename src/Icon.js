import React,{useState,useEffect} from 'react'

import iconpng1 from './icons/1.png';
import iconpng6 from './icons/6.png';
import iconpng7 from './icons/7.png';
import iconpng14 from './icons/14.png';
import iconpng18 from './icons/18.png';


function Icon(props) {

    const [img, setImg] = useState(null);

    useEffect(() => {
        switch (props.icon) {
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
           default:
           break;
        }
    }, [props.icon]) ;
    

    return (
        <div className="iconStyle">
            <img src={img} alt={props.icon}/>
        </div>
    )
}

export default Icon;




