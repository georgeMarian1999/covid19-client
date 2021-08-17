import React, {useEffect} from "react";
import StatisticsList from "./Components/Statistics/StatisticsList";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";

const AdminPageStatistics = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        getCountiesList()
            .then((r)=>{
                getHistoricalData().then((r)=>{

                });
            });

    },[])
    const getCountiesList = async ()=> {
       await axios.get('http://localhost:5000/casesByCounty')
           .then((res)=>{
               console.log(res.data);
               dispatch(allActions.countiesActions.loadCounties(res.data));
           })
           .catch((err)=>{
               console.log(err);
           })
       ;
    }
    const getHistoricalData = async () =>{
        await axios.get('http://localhost:5000/historical')
            .then((res)=>{
                dispatch(allActions.historicalActions.loadHistorical(res.data))
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(

        <>
            <StatisticsList />
        </>
    )
}

export default AdminPageStatistics;