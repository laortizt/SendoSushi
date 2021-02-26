import React from 'react'
import '../styles/Button.css';

const Button = (props) => {
    const { category } = props;

    return (
        <div className="item-card">
            <a href="#">{category}</a>
        </div>
    )
}

export default Button;