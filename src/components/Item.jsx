import React, {useState} from 'react'
import './../styles/Item.css';

const Item = (props) => {
    const { name, price, ingredients, category } = props;
    
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter +1);
    }

    const handleSubstract = () =>{
        if (counter > 0){
            setCounter(counter -1);
        }
    }

    return (
        <div className="card-container" data-filter={category || 'none'}>
            <div className="card-body">
                <div className="title-container">
                    <h5 className="card-title">{name}</h5>
                    <span className="card-price">${price}{}
                    </span>
                </div>

                <p className="card-text"> {ingredients}</p>
                
                <div className="card-quantity">
                    <div className="card-quantity-controls">
                        <button onClick={handleSubstract} className="btn-quantity">-</button>
                        <span>{counter}</span>
                        <button onClick={handleAdd} className="btn-quantity">+</button>
                    </div>

                    <div>
                        <button className="btn-add">añadir</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Item;