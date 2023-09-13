import React from 'react';
import {Link} from "react-router-dom";
import './style.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <h2>footer</h2>
                    <nav>
                        <Link to={'/'}>Instagram</Link>
                        <Link to={'/'}>Twitter</Link>
                        <Link to={'/'}>Facebook</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;