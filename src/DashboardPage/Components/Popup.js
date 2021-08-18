import React, {useEffect} from "react";
import style from "./Popup.module.css"


const Popup = ({county_code,counties}) => {
    const [index,setIndex] = React.useState(0);
    useEffect(() => {
        console.log(counties);
        setIndex(counties.findIndex(el => el.county_code === county_code));
    }, [counties]);
  
    

    return(
        <div className={style.infos}>
             {counties[index]!==undefined && counties[index].county}
        </div>
    )
}


export default Popup;