// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Operator1.css'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getByAltText } from '@testing-library/react';
import {CircularProgress} from "@material-ui/core";
import ONLINE_URL from "../../Common/ONLINE_URL";
function Operator1({daily}) {

    const [active, setActive] = useState(0);
    const [cases, setCases] = useState('');
    const [tests, setTests] = useState('');
    const [now, setNow] = useState({ case : daily[0].cases, test: daily[0].tests})
    const [loading, setLoading] = useState(false);


    async function loadDailyCases(event){
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about daily cases and tests for the last 40 days');
        if(result){
            await axios.post(ONLINE_URL+'UpdateCases');
            setLoading(true);
            
            
            setTimeout(function(){setLoading(false);
            window.location.reload()}, 10000);
                
          
        }
        
       
    }

    async function loadNews(event){
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about recent news. Your own news will not be deleted');
        
        if(result){
            await axios.post(ONLINE_URL+'UpdateNews');

            setLoading(true);
            
            
            setTimeout(function(){setLoading(false);
            window.location.replace('/home');}, 10000);
            
        }
        
       
    }

    async function loadCounty(event){
        setLoading(true);
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about recent county data');
        
        if(result){
            await axios.put(ONLINE_URL+'update');

            setLoading(false);
            window.location.replace('/dashboard');
            //setTimeout(function(){setLoading(false);
            // window.location.replace('/dashboard');}, 10000);

        }
        
       
    }

    function selectChangeHandler(event){
        event.preventDefault();
        setActive(event.target.value);
        setNow({ case : daily[active].cases, test: daily[active].tests})
    }

    function onSumbitHandler(event){
        event.preventDefault();
        const data = {
            "cases": cases,
            "tests": tests, 
            
        };
        if(active!=0){
            data.date = daily[active-1].date;
        }
        else{
            let d = daily[0].date;
            d = new Date(d);
            d.setDate(d.getDate()+1);
            data.date = d;
        }

        axios.put(ONLINE_URL+'setDaily', data).then(
            alert('Modifications saved, refresh page to see the new data'),
            daily[active].cases = cases,
            daily[active].tests = tests,
            setNow({ case : cases, test: tests})
        ).catch(_ => {
            alert('Something went wrong');
        });
    }

    function casesChange(event){
        event.preventDefault();
        setCases(event.target.value);
    }

    function testsChange(event){
        event.preventDefault();
        setTests(event.target.value);
    }
    return (

        
        <div className='operator1 main'>
            
        {(loading)? (<>
        <div className='loading'>
            <CircularProgress/>
            Yhe server is working on updates... This may take a while
            </div>
        </>):(<></>)}

        <h1>See this day:
            <select name="" id="" onChange={selectChangeHandler}> 
                {daily.map((d, id) => (
                    <option name='day' value={id}>{d.date}</option>
                ))}
            </select>    
        </h1>
     
        <div className='flex'>
        
        <div>
            <h2>Today's cases in total:</h2>
            <h1>{now.case}</h1>
        </div>
        <div>
            <h2>Nr of tests today:</h2>
            <h1>{now.test}</h1>
        </div>
        
        </div>
        <div className='load'>
        
        
        <p>Change data manually: </p>
        </div>

        <div className='form'>
            <form action="" onSubmit={onSumbitHandler}>
             
                <input type="text" placeholder='cases' name='cases' onChange={casesChange}/>
                <input type="text" placeholder='tests' name='tests' onChange={testsChange}/>
                <button type='submit'>Save changes</button>

            </form>
        </div>

        <div className='official'>
            <h1>Load data from Official Sites:</h1>
            <button onClick={loadDailyCases}>Load daily cases for the last 40 days</button>
            <button onClick={loadNews}>Update news from Official Sites</button>
            <button onClick={loadCounty}>Update all data about Counties</button>
        </div>
    </div>
    )
}

export default Operator1
