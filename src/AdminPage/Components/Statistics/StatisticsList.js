import React from 'react';

import style from './DataList.module.css'


import HistoricalTabel from "./HistoricalTabel";
import CountiesTable from "./CountiesTable";
const StatisticsList = () =>{

    return(
        <div className={style.adminContent}>
            <CountiesTable/>
            <HistoricalTabel/>
        </div>

    )
}

export default StatisticsList;