import { count } from "d3";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import style from "./Popup.module.css"


const Popup = ({county_code,counties}) => {
    const [index,setIndex] = React.useState(0);
    useEffect(() => {
        console.log(counties);
        setIndex(counties.findIndex(el => el.county_code === county_code));
    }, [counties]);
  
    

    return(
        <div className={style.infos}>
             {counties[index].county}
        </div>
    )
}


export default Popup;