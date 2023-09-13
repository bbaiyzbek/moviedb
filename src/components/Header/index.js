import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './style.css';

const Header = () => {
    const [value, setValue] =useState('')
    const navigate = useNavigate()
    return (
        <header>
             <div className="container">
                 <div className="header">
                     <div>
                         <Link to={'/'}><h1>LoGo</h1></Link>
                     </div>
                     <nav>
                         <Link to={'/'}>Home</Link>
                         <Link to={'/'}>Popular</Link>
                         <Link to={'/'}>About</Link>

                     </nav>
                     <div className={'search-box'}>
                         <input type="text" onChange={(e)=> setValue(e.target.value)}/>
                         <button type={'submit'} onClick={() => navigate(`/search?name=${value}`)}>&#128269;</button>
                     </div>
                 </div>
             </div>
        </header>
    );
};

export default Header;