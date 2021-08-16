import React, {useEffect} from 'react';
import {DataGrid} from "@material-ui/data-grid";
import {useSelector} from "react-redux";
import style from './CountiesTable.module.css';
const CountiesTable = ({updateCountyData,loading}) =>{
    const counties = useSelector(state =>state.counties);
    useEffect(()=>{
        console.log(counties);
    },[])
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
            field: 'county_code',
            headerName: 'County code',
            width: 200,
            editable: false,
        },
        {
            field: 'total_county',
            headerName: 'Cases',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'total_healed',
            headerName: 'Healed',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'county',
            headerName: 'County',
            width: 200,
            editable: false,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 200,
            editable: false,
        }
    ];
    return(
        <div className={style.countiesTable}>
            <DataGrid
                loading={loading}
                onCellEditCommit={updateCountyData}
                rows={counties}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </div>
    )
}

export default CountiesTable;