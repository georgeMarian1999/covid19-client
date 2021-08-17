import React, {useEffect} from "react";
import Map from "./Components/Map";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getCountiesList();

},[])


  const getCountiesList = async ()=> {
    await axios.get(ONLINE_URL+'casesByCounty')
        .then((res)=>{
            // console.log(res.data);
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

