import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SVG_DATA from "../SvgData/SvgData";
import style from "./Map.module.css";
import SvgMap from "./SvgMap";


const Map = () => {
  // const counties = useSelector((state) => state.counties);
  // useEffect(() => {
  //   console.log(counties);
  // }, []);






  return (
    <div>
      <div className={style.mapdiv}>

    <SvgMap />
    </div>
    </div>
  );
};

export default Map;
