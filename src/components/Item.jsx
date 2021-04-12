import React, {useState} from 'react'
import './../styles/Item.css';
import OptionSet from './OptionSet';

const Item = (props) => {
    const { product, name, price, ingredients, category, subitems, quantity, onAddToCart, onRemoveFromCart } = props;
    
    const [counter, setCounter] = useState(quantity);
    const [items, setItems] = useState([])

    const handleAdd = () => {
        setCounter(counter + 1);
        onAddToCart(product)
    }

    const handleSubstract = () =>{
        if (counter > 0){
            setCounter(counter - 1);
            onRemoveFromCart(product)
        }
    }

    const handleSubItemSelection = (opt) => {
        setItems([...items, opt])
        console.log(items)
    }

    let optionSets = (subitems || []).map(optionSet => 
        <OptionSet key={`${product.id.toString()}-sub-${optionSet.id}`}
            productId={product.id} options={optionSet.options} id={optionSet.id}
            name={optionSet.name} onOptionSelected={handleSubItemSelection} />
    )

    return (
        <div className="card-container" data-filter={category || 'none'}>
            <div className="card-body">
                <div className="title-container">
                    <h5 className="card-title">{name}</h5>
                    <span className="card-price">${price}{}
                    </span>
                </div>

                <p className="card-text"> {ingredients}</p>

                {subitems && 
                    <div className="card-subitems">
                        {optionSets}
                    </div>}
                
                <div className="card-quantity">
                    <div className="card-quantity-controls">
                        <button onClick={handleSubstract} className="btn-quantity">-</button>
                        <span>{quantity}</span>
                        <button onClick={handleAdd} className="btn-quantity">+</button>
                    </div>
                </div>
            </div>
        </div>        
    )
};

export default Item;