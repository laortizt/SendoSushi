import React from 'react'
import './../styles/Item.css';

const Item = (props) => {
    const { name, price, ingredients, category } = props;
    
    return (
        <div className={ "card-container category-" + (category || 'none') }>
            <div class="card-body">
                <div class="title-container">
                    <h5 class="card-title">{name}</h5>
                    <span class="card-price">${price}k</span>
                </div>
                <p class="card-text"> {ingredients}</p>
                
                <div class="card-quantity">
                    <button class="btn-quantity">-</button>
                    <span>0</span>
                    <button class="btn-quantity">+</button>
                </div>
            </div>
        </div>
    )
};

export default Item;