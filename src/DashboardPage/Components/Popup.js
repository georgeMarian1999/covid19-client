import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import style from "./Popup.module.css";
import SvgMap from "./SvgMap";


const Popup = ({county_code, counties, setSelectedCountry}) => {
    const [index,setIndex] = React.useState(0);
    useEffect(() => {
        console.log(setSelectedCountry)
        setIndex(counties.findIndex(el => el.county_code === county_code));
    }, [counties]);
  

    
    

    return(
        
        <text x="60" y="35" className={style.infos}>
             {counties[index]!==undefined && counties[index].county}
        </text>
        
    )
}


export default Popup;