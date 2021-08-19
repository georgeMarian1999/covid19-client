import React from 'react'
import './HeaderFC.css'

function HeaderFC({user}) {
    
    function logOut(){
        sessionStorage.clear();
        window.location.replace('/');
    }
    return (
        <div className="navbar">
            <a href="/" className='logoa' >Coro<span>News</span></a>
            <a href="/dashboard" className='a'>Dashboard</a>

            {(user!==null)? (<>


            {((user.type.toLowerCase()==='medic') || 
            (user.type.toLowerCase()==='operator') ||
            (user.type.toLowerCase()==='admin')) && (<a href="/medicboard" className='a'>Medic page</a>)}

            {((user.type.toLowerCase()==='operator') ||
            (user.type.toLowerCase()==='admin')) && (<a href="/operatorboard" className='a'>Operator page</a>)}
            
            {
            (user.type.toLowerCase()==='admin') && ( <a href="/adminboard" className='a'>Admin board</a>)}

           
            
            </>):(<></>)}
            <div className="dropdown">
            {(user!==null)? (<>
            <button className="dropbtn right">{user.username}</button>

            <div className="dropdown-content right">
                <button>{user.type}</button>
                <button className='logOut'  onClick={logOut}>Log out</button>
                
            </div>
            </>) : (<><button className="dropbtn right" >Log in</button>
            
            <div className="dropdown-content right">
                <button>You can't freely register</button>
                
                <a href='/login' className='logIn'>Log in</a>
                
                
            </div>
            </>)}
    </div>
  </div>
    
       
    )
}

export default HeaderFC
