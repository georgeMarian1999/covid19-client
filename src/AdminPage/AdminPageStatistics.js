import React, {useEffect, useState} from "react";
import StatisticsList from "./Components/Statistics/StatisticsList";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const AdminPageStatistics = ()=> {
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        getCountiesList();
        getHistoricalData();
    },[])
    const updateCountyData = (e) =>{
        let data = {
            "id": e.id,
        };
        data[e.field] = Number(e.value);
        let subroute = 'update/county/'+e.field;
        axios.put(ONLINE_URL+subroute,data)
            .then((res)=>{
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
    }
    const updateHistoricalData = (e) =>{

        let data = {
            "id": e.id,
        };
        data[e.field] = Number(e.value);
        let subroute = 'update/historical/'+e.field;

        console.log(data,subroute);
        axios.put(ONLINE_URL+subroute,data)
            .then((res)=>{
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
    }
    const getCountiesList = async ()=> {
        setLoading(true);
       await axios.get(ONLINE_URL+'casesByCounty')
           .then((res)=>{
               setLoading(false);
               dispatch(allActions.countiesActions.loadCounties(res.data));
           })
           .catch((err)=>{
               setLoading(false);
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
            <StatisticsList
                updateHistoricalData={updateHistoricalData}
                updateCountyData={updateCountyData}
                loading={loading} />
        </>
    )
}

export default AdminPageStatistics;