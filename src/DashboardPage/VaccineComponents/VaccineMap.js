import React, {useEffect, useRef} from 'react';
import SVG_DATA from "../SvgData/SvgData";
import style from './VaccineMap.module.css';
import {Tooltip} from "react-svg-tooltip";

const VaccineMap = ({vaccineData}) =>{
    const svgRef = useRef(null);
  return(
          <div className={style.mapdiv}>
              <h1>Total doses for each county</h1>
              <svg
                  height={800}
                  width={800}
                  version="1.2"
                  viewBox="0 0 1000 705"
                  xmlns="http://www.w3.org/2000/svg"
              >

                  {SVG_DATA.map((county) => {
                      const vaccine = vaccineData.findIndex(el =>el.county.toUpperCase() === county.name.toUpperCase());
                          return(
                              <g ref={svgRef} key={county.id} className={style.countyWrapper}>
                                  <path d={county.d} id={county.id} name={county.name}></path>
                                  <Tooltip triggerRef={svgRef}>
                                      <rect x={2} y={0} width={200} height={50} rx={.5} ry={.5} fill='black'/>
                                      <text x={5} y={15} fontSize={13} fill='white'>
                                          County name:{county.name}
                                      </text>
                                      <text x={5} y={40} fontSize={13} fill='white'>
                                          Doses : {vaccine!==-1 && vaccineData[vaccine].sum}
                                      </text>
                                  </Tooltip>
                              </g>
                          )
                      }
                  )}



              </svg>
          </div>
  )
};

export default VaccineMap;