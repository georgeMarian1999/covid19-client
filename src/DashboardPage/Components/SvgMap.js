import React, { useState } from "react";
import SVG_DATA from "../SvgData/SvgData";
import Popup from "./Popup";
import style from "./SvgMap.module.css";

const SvgMap = ({counties}) => {
  const [isShown, setIsShown] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');
  const getHoveredCountyHandler = (e) => {
    // get element that is being hovered over right now
    console.log(e.target.getAttribute('id'))
    return e.target.getAttribute('id')
  }

  const getXandYOnMouseMove = (e) =>{
    let cursor_x = e.pageX;
    let cursor_y = e.pageY;
    console.log('pagex' + e.pageX, 'page y' + e.pageY)
    
  }

  return(
    <div>
              <svg
          version="1.2"
          viewBox="0 0 1000 705"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          {SVG_DATA.map((county) => {
            return(
              <g key={county.id} className={style.g} 
              onMouseOver={getHoveredCountyHandler, getXandYOnMouseMove}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
                <path d={county.d} id={county.id} name={county.name}></path>
                
                {/* {isShown && ( */}
                <Popup counties={counties} county_code={county.id} setSelectedCountry={setSelectedCountry}/>
                {/* )} */}
                </g>                
            )
            }
            )}


          <circle cx="701.8" cy="293.1" id="0"></circle>
          <circle cx="589.2" cy="57.6" id="1"></circle>
          <circle cx="416.9" cy="151.6" id="2"></circle>

          </svg>
    </div>
  )
}

export default SvgMap;