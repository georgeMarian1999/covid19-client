import React, {useEffect, useState} from 'react';
import VaccineMap from "./VaccineComponents/VaccineMap";
import ONLINE_URL from "../Common/ONLINE_URL";
import axios from 'axios';
import DosesByAgeGraph from "./VaccineComponents/DosesByAgeGraph";
import DosesByGender from "./VaccineComponents/DosesByGender";
const DashboardVaccinePage = () =>{
    const [vaccineData,setVaccineData] = useState([]);
    const [vaccineByRisk,setVaccineByRisk] = useState([]);
    const [vaccineByGender,setVaccineByGender] = useState([]);


    useEffect(()=>{
        const promise1 = getVaccineData();
        const promise2 = getVaccineDataByRiskGroup();
        const promise3 = getVaccineDataByGender();

        axios.all([promise1,promise2,promise3])
            .then(axios.spread((...responses)=>{
                const response1 = responses[0];
                setVaccineData(response1.data);
                const response2 = responses[1];
                setVaccineByRisk(response2.data);
                const response3 = responses[2];
                setVaccineByGender(response3.data);
            }))
            .catch(err=>{
                console.log(err);
            })
    },[])
    const getVaccineData = () =>{
       return axios.get(ONLINE_URL+'dosesByCounty');
    }
    const getVaccineDataByRiskGroup = () =>{
        return axios.get(ONLINE_URL+'vaccine/age');
    }
    const getVaccineDataByGender = () =>{
        return axios.get(ONLINE_URL+'vaccine/gender');
    }
    return(
        <>
         <VaccineMap vaccineData={vaccineData}/>
            <DosesByAgeGraph vaccineByRisk={vaccineByRisk}/>
            <DosesByGender vaccineByGender={vaccineByGender}/>
        </>
    )
};

export default DashboardVaccinePage;