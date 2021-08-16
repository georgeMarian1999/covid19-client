import React from 'react';

import style from './DataList.module.css'


import HistoricalTabel from "./HistoricalTabel";
import CountiesTable from "./CountiesTable";
const StatisticsList = ({updateHistoricalData,updateCountyData,loading}) =>{

    return(
        <div className={style.adminContent}>
            <CountiesTable
                updateCountyData={updateCountyData}
                loading={loading}/>
            <HistoricalTabel
                updateHistoricalData={updateHistoricalData}
                loading={loading}/>
        </div>

    )
}

export default StatisticsList;