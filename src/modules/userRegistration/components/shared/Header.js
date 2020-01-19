import React from 'react';

import Logo from '../../../../Assets/Images/Logo.png';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div>
                    <a className="navbar-brand " href="#">
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />

                    </a>
                </div>
                <div style={{position: 'relative', right: '44%'}}> &nbsp;<h3>LandMark Group</h3></div>
            </nav>
            
        </header>
    )
}
export default Header;