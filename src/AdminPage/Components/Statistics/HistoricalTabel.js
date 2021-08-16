import React from 'react';
import {useSelector} from "react-redux";
import style from './HistoricalTabel.module.css';
import {DataGrid} from "@material-ui/data-grid";
const HistoricalTabel = ({updateHistoricalData}) =>{
    const historical = useSelector(state =>state.historical);
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
            field: 'cases',
            headerName: 'Cases',
            width: 200,
            editable: true,
        },
        {
            field: 'deaths',
            headerName: 'Deaths',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'recovered',
            headerName: 'Recovered',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 200,
            editable: false,
        },
        {
            field: 'fetchdate',
            headerName: 'Fetch Date',
            width: 200,
            editable: false,
        }
    ];
    return(
        <div className={style.HistoricalTable}>
            <DataGrid
                onCellEditCommit={updateHistoricalData}
                rows={historical}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </div>
    )
}

export default HistoricalTabel;