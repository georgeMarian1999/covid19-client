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
        setLoading(true);
        const promise1 = getCountiesList();
        const promise2 = getHistoricalData();

        axios.all([promise1,promise2])
            .then(axios.spread((...responses)=>{
                const response1 = responses[0];
                const response2 = responses[1];
                setLoading(false);
                dispatch(allActions.countiesActions.loadCounties(response1.data));
                dispatch(allActions.historicalActions.loadHistorical(response2.data))

        }))
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
        return axios.get(ONLINE_URL+'casesByCounty');
    }
    const getHistoricalData = async () =>{
        return axios.get(ONLINE_URL+'historical');
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