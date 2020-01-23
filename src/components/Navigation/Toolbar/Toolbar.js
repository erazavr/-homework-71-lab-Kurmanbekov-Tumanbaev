import React from 'react';
import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = () => (
    <header className='header'>
        <h1 style={{color: 'white'}}>Turtle Pizza Admin</h1>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;