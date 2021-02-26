import React from 'react'
import Button from './Button'
import './../styles/Nav.css';

const Nav = () => {
    
    return (
        <nav className="nav-items-slider">
            <Button category="sushi"/>
            <Button category="combos"/>
            <Button category="ceviche"/>
            <Button category="wok"/>
            <Button category="bebidas"/>
        </nav>
    )
};

export default Nav;