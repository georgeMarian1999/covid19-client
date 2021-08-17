import React from 'react'
import './HeaderFC.css'

function HeaderFC({user}) {
    console.log(user);
    return (
        <div className="navbar">
            <a href="/" className='logoa' >Coro<span>News</span></a>
            <a href="/adminboard" className='a'>Dashboard</a>

            {(user!==null)? (<>
            <a href="/medicboard">Medic page</a>
            <a href="/adminboard" className='a'>Admin board</a>
            <a href="/operator" className='a'>Operator page</a>
            
            </>):(<></>)}
            <div className="dropdown">
            {(user!==null)? (<>
            <button className="dropbtn right">username</button>

            <div className="dropdown-content right">
                <button>usertype</button>
                <button className='logOut'>Log out</button>
                
            </div>
            </>) : (<><button className="dropbtn right" >Log in</button>
            
            <div className="dropdown-content right">
                <button>You cant freely register</button>
                
                <a href='/login' className='logIn'>Log in</a>
                
                
            </div>
            </>)}
    </div>
  </div>
    
       
    )
}

export default HeaderFC
