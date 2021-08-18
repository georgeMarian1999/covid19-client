import React, {useEffect} from "react";
import Map from "./Components/Map";
import axios from 'axios';
import {useDispatch} from "react-redux"
import allActions from "../Store/Actions";
import { useState } from "react/cjs/react.development";
import Graphic from "./Components/Graphic";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const DashboardPage = () => {
  const dispatch = useDispatch();
  const [counties,setCounties] = React.useState([]);
  const [data, setData] = useState('');
  useEffect(()=>{
    getCountiesList();
    getDataList();

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


 const getDataList = async ()=> {
  axios.get('http://localhost:5000/daily')
     .then((res)=>{
         
        let help = res.data;
        for(let i=0;i<help.length;i++)
          help[i]=help[i].cases

        setData(help);
     })
     .catch((err)=>{
         console.log(err);
     })
 ;
}
  return(
    <>
    <Map counties={counties} />

    {(data!=='')? (<Graphic data={data}></Graphic>):( <></>)}
    
    </>
  )
}

export default DashboardPage;

