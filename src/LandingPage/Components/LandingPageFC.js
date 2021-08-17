import React, { useState } from 'react'
import './LandingPage.css'

function LandingPageFC( {symptomes, news}) {
 
    const [actuals, setActuals] =  useState([1,2,3])
    const [active, setActive] = useState(1);

    
    
    function changeNumbers (nr, event) {
        event.preventDefault();
        setActive(nr);
        if(nr === 1) return;
        if(nr === news.length) return;
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
    
        if(active!==news.length){
            setActive(active+1);
            
        }
        if(active<news.length-1){
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


            {news.filter((_, id) => id===active-1).map(n =>
            (
            <div className='item news' key = {'news' + active}>
                
                

            <div className='controlPane'>
                <div className = 'buttons'>
                    <button onClick={goPrevious} className={(active===1)? ("hide"):("")}>Previous</button>
                    <button onClick={goNext} className={(active===news.length)? ("hide"):("")}>Next</button>
                </div>
                
                
                <a href={n.link} className='title' target='_blank' rel='noreferrer'>
                <h1>{n.title}</h1>
                <img src={n.imageurl} alt="" />
                </a>
                <div className = 'description' dangerouslySetInnerHTML={{__html: n.description, }}>
                </div>
                
                
                

                <div className='content' dangerouslySetInnerHTML={{__html: n.content, }}>
                </div>

                
                <div className='numbered'>
                    {
                        actuals.map( a => (
                            <button key={a+'nr'} onClick={changeNumbers.bind(this,a)} className={(active===a)?('active'):('')}>{a}</button>
                        ))
                    }
                    
                    
                </div>

                
            </div>
            </div>
            ))}

        </div>
    )
}

export default LandingPageFC
