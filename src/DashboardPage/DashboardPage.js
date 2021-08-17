import React, {useEffect} from "react";
import Map from "./Components/Map";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const DashboardPage = () => {
  const dispatch = useDispatch();
  const [counties,setCounties] = React.useState([]);
  useEffect(()=>{
    getCountiesList();

},[])


  const getCountiesList = async ()=> {
     axios.get(ONLINE_URL+'casesByCounty')
        .then((res)=>{
            //dispatch(allActions.countiesActions.loadCounties(res.data));
            setCounties(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    ;
 }

  return(
    <>
    <Map counties={counties} />
    </>
  )
}

export default DashboardPage;

