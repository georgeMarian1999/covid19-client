import React, {useEffect} from "react";
import Map from "./Components/Map";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";




const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getCountiesList()
        .then((r)=>{
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

  return(
    <>
    <Map />
    </>
  )
}

export default DashboardPage;

