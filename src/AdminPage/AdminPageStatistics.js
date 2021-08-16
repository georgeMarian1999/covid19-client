import React, {useEffect, useState} from "react";
import StatisticsList from "./Components/Statistics/StatisticsList";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
const LOCAL_URL = 'http://localhost:5000/';
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const AdminPageStatistics = ()=> {
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        getCountiesList();
        getHistoricalData();
    },[])
    const updateCountyData = (e) =>{

        console.log(e.id,e.value);
        let data;
        let subroute;
        if(e.field ==='total_county'){
            data = {
                "id": e.id,
                "total_county": e.value
            };
            subroute = 'update/county/cases';

        }
        else {
             data = {
                "id": e.id,
                "total_healed": e.value
            };
            subroute = 'update/county/healed';
        }
        axios.put(LOCAL_URL+subroute,data)
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
        // axios.put(LOCAL_URL+subroute,data)
        //     .then((res)=>{
        //         console.log(res);
        //     })
        //     .catch(err =>{
        //         console.log(err);
        //     })
    }
    const getCountiesList = async ()=> {
        setLoading(true);
       await axios.get(ONLINE_URL+'casesByCounty')
           .then((res)=>{
               console.log(res.data);
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