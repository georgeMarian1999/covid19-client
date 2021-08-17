import { count } from "d3";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import style from "./Popup.module.css"


const Popup = ({county_code}) => {
    const counties = useSelector(state => state.counties);
    const [index, setIndex] = React.useState(0) 
    useEffect(() => {
        console.log(counties);

        console.log(county_code, typeof county_code)
        console.log(counties.findIndex(el => el.county_code == county_code))
      setIndex(counties.findIndex(el => el.county_code == county_code))
    }, []);
  
    
    // const index = counties.findIndex(el => el.county_code === county_code);
    return(
        <div className={style.infos}>
            {/* {counties[index].county} */}
        </div>
    )
}


export default Popup;