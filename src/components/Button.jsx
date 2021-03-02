import React from 'react'
import '../styles/Button.css';

const Button = (props) => {
    const { category, onSelectCategory } = props;
    
    const selectCategory = (ev) => {
        ev.preventDefault();

        if (onSelectCategory) {
            onSelectCategory(category);
        }
    }

    return (
        <div className="item-card">
            <a href="#" data-filter={category} onClick={selectCategory}>
                {category}
            </a>
        </div>
    )
}

export default Button;