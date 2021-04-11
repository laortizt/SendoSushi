import React from 'react'
import '../styles/Button.css';

const Button = (props) => {
    const { category, onSelectCategory, active } = props;
    
    const selectCategory = (ev) => {
        ev.preventDefault();

        if (onSelectCategory) {
            onSelectCategory(category);
        }
    }

    return (
        <div className={"item-card " + (active ? "active" : "")} onClick={selectCategory}>
            <a href="/#" data-filter={category}>
                {category}
            </a>
        </div>
    )
}

export default Button;