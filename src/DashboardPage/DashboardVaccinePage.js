import React, {useEffect, useState} from 'react';
import VaccineMap from "./VaccineComponents/VaccineMap";
import ONLINE_URL from "../Common/ONLINE_URL";
import axios from 'axios';
import DynamicGraph from "./VaccineComponents/DynamicGraph";
const DashboardVaccinePage = () =>{
    const [vaccineData,setVaccineData] = useState([]);
    const [vaccineByRisk,setVaccineByRisk] = useState([]);


    useEffect(()=>{
        const promise1 = getVaccineData();
        const promise2 = getVaccineDataByRiskGroup();

        axios.all([promise1,promise2])
            .then(axios.spread((...responses)=>{
                const response1 = responses[0];
                setVaccineData(response1.data);
                const response2 = responses[1];
                setVaccineByRisk(response2.data);
                console.log(response1.data);
            }))
            .catch(err=>{
                console.log(err);
            })
    })
    const getVaccineData = () =>{
       return axios.get(ONLINE_URL+'dosesByCounty');
    }
    const getVaccineDataByRiskGroup = () =>{
        return axios.get(ONLINE_URL+'vaccine/age');
    }
    return(
        <>
         <VaccineMap vaccineData={vaccineData}/>
            <DynamicGraph vaccineByRisk={vaccineByRisk}/>
        </>
    )
};

export default DashboardVaccinePage;