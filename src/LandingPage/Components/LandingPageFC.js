import React, { useState } from 'react'
import './LandingPage.css'

function LandingPageFC({symptomes}) {
    
    const [actuals, setActuals] =  useState([1,2,3])
    const [active, setActive] = useState(1);

    const fakenews = [
        {title: 'tile1', content: 'content1'},
        {title: 'tile2', content: 'content2'},
        {title: 'tile3', content: 'content3'},
        {title: 'tile4', content: 'content4'},
        {title: 'tile5', content: 'content5'},
        {title: 'tile6', content: 'content6'}
    ]
    
    
    function changeNumbers (nr, event) {
        event.preventDefault();
        setActive(nr);
        if(nr === 1) return;
        if(nr === fakenews.length) return;
        setActuals([nr-1, nr, nr+1]);
        
    }

    function goPrevious() {
        if(active>1){
            setActive(active-1);
       }
       if(active>2){
        setActuals([active-2, active-1, active]);
       }
        
    }

    function goNext() {
    
        if(active!==fakenews.length){
            setActive(active+1);
            
        }
        if(active<fakenews.length-1){
            setActuals([active, active+1, active+2]);
        }

    }

    return (
        <div className='main'>
            
            <div className='item s'>
            <h1>Covid-19 Symptoms</h1>
                <div className='simp'>
            
            <div>
            <h2>Most common symptoms:</h2>
                <ul>
                {
                    symptomes.filter(s=> s.type[0]==='common').map(s => (
                        <li key={s.id}>{s.name[0]}</li>
                    ))
                }
                </ul>
            </div>
            <div>
            <h2>Less common symptoms:</h2>
                <ul>
                {
                    symptomes.filter(s=> s.type[0]==='lcommon').map(s => (
                        <li key={s.id}>{s.name[0]}</li>
                    ))
                }
                </ul>
            </div>

            <div>
            <h2>Serious symptoms:</h2>
                <ul>
                {
                    symptomes.filter(s=> s.type[0]==='serious').map(s => (
                        <li key={s.id}>{s.name[0]}</li>
                    ))
                }
                </ul>
            </div>
            </div>
                
                
            </div>
            <div className='item news'>
                

            <div className='controlPane'>

                <h1>{fakenews[active-1].title}</h1>

                <div>
                {fakenews[active.content-1]}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                

                <div className = 'buttons'>
                <button onClick={goPrevious} className={(active===1)? ("hide"):("")}>Previous</button>
                <button onClick={goNext} className={(active===fakenews.length)? ("hide"):("")}>Next</button>
                </div>
                

                <div className='numbered'>
                    {
                        actuals.map( a => (
                            <button key={a+'nr'} onClick={changeNumbers.bind(this,a)}>{a}</button>
                        ))
                    }
                    
                    
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default LandingPageFC
