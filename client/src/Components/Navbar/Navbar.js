import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        
            <header className="toolbar">
                
                <nav className="main-nav">
                    <div className="nav-items">
                      
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Browse</a></li>
                        </ul>
                     
                    </div>
                </nav>
            </header>
          
    );
}

export default Navbar;