import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Popup.module.css";
import SvgMap from "./SvgMap";

const Popup = ({ county_code, counties }) => {
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    console.log(counties);
    setIndex(counties.findIndex((el) => el.county_code === county_code));
  }, [counties]);

  return (
    <>

      {/* <rect x="30" y="0" width="400" height="100" fill="white" /> */}
      <text x="60" y="30" className={style.infos}>
        County Name: {counties[index] !== undefined && counties[index].county}
      </text>
      <text x="60" y={25 + 30} className={style.infos}>
        Total County :{" "}
        {counties[index] !== undefined && counties[index].total_county}
      </text>
      <text x="60" y={20 + 60} className={style.infos}>
        Total Healed :{" "}
        {counties[index] !== undefined && counties[index].total_healed}
      </text>
    </>
  );
};

export default Popup;
