import axios from 'axios';
import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Operator1.css'
function Operator1({daily}) {

    const [active, setActive] = useState(0);
    const [cases, setCases] = useState('');
    const [tests, setTests] = useState('');

    async function loadDailyCases(event){
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about daily cases and tests for the last 40 days');
        if(result){
            await axios.post('http://localhost:5000/UpdateCases');
            window.location.reload();
        }
        
       
    }

    async function loadNews(event){
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about recent news. Your own news will not be deleted');
        
        if(result){
            await axios.post('http://localhost:5000/UpdateNews');
            window.location.replace('/home');
        }
        
       
    }

    async function loadCounty(event){
        event.preventDefault();
        let result = window.confirm('This action will pull data from official sites about recent county data');
        
        if(result){
            await axios.put('http://localhost:5000/update');
            window.location.replace('/dashboard');
        }
        
       
    }

    function selectChangeHandler(event){
        event.preventDefault();
        setActive(event.target.value);
    }

    function onSumbitHandler(event){
        event.preventDefault();
        const data = {
            "cases": cases,
            "tests": tests, 
            
        };
        if(active!==0){
            data.date = daily[active-1].date;
        }
        else{
            let d = daily[0].date;
            d = new Date(d);
            d.setDate(d.getDate()+1);
            data.date = d;
        }

        axios.put('http://localhost:5000/setDaily', data).then(
            alert('Modifications saved, refresh page to see the new data'),
            daily[active].cases = cases,
            daily[active].tests = tests,
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
            <h1>{daily[active].cases}</h1>
        </div>
        <div>
            <h2>Nr of tests today:</h2>
            <h1>{daily[active].tests}</h1>
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
