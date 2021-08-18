import React, {useEffect, useState} from 'react';
import style from './DashBoard.module.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssessmentIcon from '@material-ui/icons/Assessment';
import axios from "axios";
import {Link} from "react-router-dom";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const DashBoard = () =>{
    const [cases,setCases] = useState(0);
    const [vaccines,setVaccines] = useState(0);
    const [lastfetch,setLastFetch] = useState('');
    useEffect( () => {
        getData();
    },[])
    async function getData() {
        const promise1 =await getTotalCases();
        const promise2 = getTotalImmune();
        const promise3 = getLastFetch();


        Promise.all([promise1])
            .then((values) => {
                console.log(values);
            })
    }
    const getTotalCases =  async () =>{
        const url = ONLINE_URL + 'cases/total';
         axios.get(url)
            .then((res)=>{

                setCases(res.data[0].totalcases);
                // return new Promise(resolve => resolve(res.data));

            })
            .catch(err=>{
                return Promise.reject(err);
            })
    }
    const getTotalImmune = async () =>{
        const url = ONLINE_URL + 'vaccine/total';
        axios.get(url)
            .then(res=>{
                console.log(res.data);
                setVaccines(res.data.total);
            })
    }
    const getLastFetch = async () =>{
        const url = ONLINE_URL + 'fetchdate';
        await axios.get(url)
            .then(res=>{
                console.log(res.data);
                setLastFetch(res.data.fetchdate);
            })
    }
    return(
        <div className={style.adminBoard}>
            <div className={style.latestData}>
                <div className={style.data+' '+style.cases}>
                    <div className={style.dataTitle}>
                        <p>Total cases</p>
                        <AccessibilityIcon/>
                    </div>
                    <img
                        className={style.image}
                        width={100}
                        src={'http://localhost:3000/evolution_graph.jpg'}/>
                    <div className={style.numberWrapper}>
                        <p>{cases}</p>
                    </div>

                </div>
                <div className={style.data+' '+style.vaccines}>
                    <div className={style.dataTitle}>
                        <p>Population immune</p>
                        <FavoriteIcon/>
                    </div>
                    <img
                        className={style.image}
                        width={100}
                        src={'http://localhost:3000/vaccine.png'}/>
                    <div className={style.numberWrapper}>
                        <p>{vaccines}</p>
                    </div>
                </div>
                <div className={style.data+' '+style.date}>
                    <div className={style.dataTitle}>
                        <p>Last data fetch</p>
                        <AssessmentIcon/>
                    </div>
                    <img
                        className={style.image}
                        width={100}
                        src={'http://localhost:3000/data.png'}/>
                    <div className={style.numberWrapper}>
                        <p>{lastfetch}</p>
                    </div>
                </div>
            </div>
            <div className={style.linkWrapper}>
                <Link
                    className={style.link+' '+style.statistics}
                    to={'/adminboard/statistics'}>
                    Statistics
                </Link>
                <Link
                    className={style.link+ ' ' +style.users}
                    to={'/adminboard/users'}>
                    Users
                </Link>
            </div>
        </div>
    )
}

export default DashBoard;