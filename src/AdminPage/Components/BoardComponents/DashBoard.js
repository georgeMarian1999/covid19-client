import React, {useEffect, useState} from 'react';
import style from './DashBoard.module.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssessmentIcon from '@material-ui/icons/Assessment';
import axios from "axios";
import {Link} from "react-router-dom";
import GroupIcon from '@material-ui/icons/Group';
import {CircularProgress} from "@material-ui/core";
const ONLINE_URL = 'https://covid19-info-internship.herokuapp.com/';
const DashBoard = () =>{
    const [cases,setCases] = useState(0);
    const [vaccines,setVaccines] = useState(0);
    const [lastfetch,setLastFetch] = useState('');
    const [nrUsers,setNrUsers] = useState(0);
    const [loading,setLoading] = useState(false);
    useEffect( () => {
        getData();
    },[])
    async function getData() {
        setLoading(true);
        const url1 = ONLINE_URL + 'vaccine/total';
        const url2 = ONLINE_URL + 'vaccine/total';
        const url3 = ONLINE_URL + 'fetchdate';
        const url4 = ONLINE_URL +'getAllUsers';

        const promise1 = axios.get(url1);
        const promise2 = axios.get(url2);
        const promise3 = axios.get(url3);
        const promise4 = axios.get(url4);

        axios.all([promise1, promise2, promise3,promise4]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responesThree = responses[2]
            const responseFour = responses[3];
            console.log(responseOne,responseTwo,responesThree,responseFour);
            setCases(responseOne.data.total);
            setVaccines(responseTwo.data.total);
            setLastFetch(responesThree.data.fetchdate);
            setNrUsers(responseFour.data.length);
            setLoading(false);
        })).catch(errors => {
            console.log(errors);
        })

    }

    return(
        <div className={style.adminBoard}>
            <div className={style.right}>
                <div>
                    <img
                        className={style.rightImage}
                        src={'http://localhost:3000/whologo.png'}
                        alt={'WHO'}/>
                </div>
                <div className={style.data+ ' '+ style.rightData+ ' '+style.usersTotal}>
                    <div className={style.dataTitle}>
                        <p>Registered users</p>
                        <GroupIcon/>
                    </div>
                    <img
                        className={style.image}
                        width={100}
                        src={'http://localhost:3000/users.png'}/>
                    <div className={style.numberWrapper}>
                        {!loading &&<p>{nrUsers}</p>}
                        {loading && <CircularProgress/>}
                    </div>
                </div>
            </div>
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
                        {!loading && <p>{cases}</p>}
                        {loading && <CircularProgress/>}
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
                        {!loading && <p>{vaccines}</p>}
                        {loading && <CircularProgress/>}
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
                        {!loading &&<p>{lastfetch}</p>}
                        {loading && <CircularProgress/>}
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