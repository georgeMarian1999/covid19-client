import React, {useEffect} from "react";
import style from "./Map.module.css";
import SvgMap from "./SvgMap";


const Map = ({counties}) => {
    return (
        <div>
            <div className={style.mapdiv}>
                <SvgMap counties={counties}/>
            </div>
        </div>
    );
};

export default Map;
