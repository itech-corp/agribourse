import React from 'react';
import TopNav from '../TopNav/topNav';
import BottomNav from '../Navbar/Navbar'
import TopLine from '../TopLine/TopLine';
import './Navigation.css';

function Navigation(props) {
    return (
        <div>
            <TopLine/>
           <hr/>
           <TopNav/>
           <BottomNav/>
        </div>
    );
}

export default Navigation;