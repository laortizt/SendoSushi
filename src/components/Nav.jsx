import React from 'react'
import Button from './Button'
import './../styles/Nav.css';

const Nav = (props) => {
    const { onSelectCategory } = props;

    return (
        <nav className="nav-items-slider">
            <Button category="sushi" onSelectCategory={onSelectCategory} />
            <Button category="combos" onSelectCategory={onSelectCategory}/>
            <Button category="ceviche" onSelectCategory={onSelectCategory}/>
            <Button category="wok" onSelectCategory={onSelectCategory}/>
            <Button category="bebidas" onSelectCategory={onSelectCategory}/>
        </nav>
    )
};

export default Nav;
