import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../../styles/homeStyles.css';

const Footer = () => {
    return (
        <div className="center nav-btn mt-4 sticky-bottom">

            <Link to="/" className="link-style mx-2">
                <button  className="btn btn-primary">
                    FORM
                </button>
            </Link>


            <Link to="/view" className="link-style mx-2" >
                <button className="btn btn-success">
                    VIEW
                 </button>
            </Link>

        </div >
    )
}

export default Footer;