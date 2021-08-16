import axios from 'axios';
import { count } from 'd3';
import React, {useEffect, useState} from 'react'
import Map from "./Components/Map";
import {useDispatch} from "react-redux";


const DashboardPage = () => {
  // const [counties, setCounties] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getCountiesList();
  // }, [])
  // const getCountiesList = async() => {
  //   await axios.get('https://covid19-info-internship.herokuapp.com/casesByCounty')
  //     .then((res) => {
  //       console.log(res.data);
  //       setCounties(res.data);
  //     })
  //     .catch((err) =>{
  //       console.log(err);
  //     });
  // }
  return(
    <>
    <p>test</p>
    <Map />
    </>
  )
}

export default DashboardPage;



// class DashboardPage extends React.Component {
//     render() {
//         return(
            
//             <Map />
            
//         )

//     }
// }


// export default DashboardPage;