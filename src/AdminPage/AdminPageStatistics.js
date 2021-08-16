import React, {useEffect, useState} from "react";
import StatisticsList from "./Components/Statistics/StatisticsList";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
const LOCAL_URL = 'http://localhost:5000/';
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const AdminPageStatistics = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        getCountiesList();
        getHistoricalData();
    },[])
    const getCountiesList = async ()=> {
       await axios.get(ONLINE_URL+'casesByCounty')
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
        await axios.get(ONLINE_URL+'historical')
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