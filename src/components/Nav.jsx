import React from 'react'
import Button from './Button'
import './../styles/Nav.css';

const Nav = (props) => {
    const { onSelectCategory, category } = props;

    return (
        <nav className="nav-items-slider">
            <Button category="sushi" active={category === "sushi"} onSelectCategory={onSelectCategory} />
            <Button category="tempura" active={category === "tempura"} onSelectCategory={onSelectCategory} />
            <Button category="combos" active={category === "combos"} onSelectCategory={onSelectCategory}/>
            {/* <Button category="ceviche" active={category === "ceviche"} onSelectCategory={onSelectCategory}/> */}
            <Button category="wok" active={category === "wok"} onSelectCategory={onSelectCategory}/>
            <Button category="bebidas" active={category === "bebidas"} onSelectCategory={onSelectCategory}/>
        </nav>
    )
};

export default Nav;
