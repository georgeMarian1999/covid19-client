import React from 'react'
import './HeaderFC.css'

function HeaderFC() {
    return (
        <div className="navbar">
            <a href="/" className='logo'>Coro<span>News</span></a>
            <a href="/adminboard">Dashboard</a>
            <a href="/medicpage">Medic page</a>
            <a href="/adminboard">Admin board</a>
            <a href="/operator">Operator page</a>
            <div className="dropdown">


            <button className="dropbtn right">username</button>

            <div className="dropdown-content right">
                <button>usertype</button>
                <button className='logOut'>Log out</button>
                
            </div>
    </div>

        </div>
    
       
    )
}

export default HeaderFC
