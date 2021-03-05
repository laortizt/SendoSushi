import React from 'react';
import './../styles/Order.css';
import OrderItem from './OrderItem';

function Order(props) {
    const {cartItems, handleAdd, handleSubstract} = props;

    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty * 1000, 0);

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 2})).format(itemPrice)

    //función build whatsapp url
    const getWhatsappString=()=>{
        let str ='';
        cartItems.forEach(item => {
            if (item.qty !== 0)
                { let subst= `${item.name}: ${item.qty} precio: $${item.qty * item.price * 1000}, \r\n`; //lleva ''??
                    str+=subst;}
        })

        str = `${str}TOTAL (Sin domicilio): ${showTotal}`;

        return `http://wa.me/573058278323?text=${window.encodeURIComponent(str)}`;
    }
    return(
        <div className="Order">
            <div className="TotalListContainer">
                <div className="OrderListContainer">
                    {cartItems.length === 0 &&
                        <div className="Text">
                            Aún no hay productos en el carrito
                        </div>}

                    <ul className="ShoppingList container-products">
                        {cartItems.map((item) => (
                            <li key={item.id} className="OrderButtonContainer">
                                <OrderItem key={item.id.toString()}
                                    product={item} 
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.qty}
                                    onAddToCart={handleAdd}
                                    onRemoveFromCart={handleSubstract}/>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {cartItems.length > 0 &&
                    <a href={getWhatsappString()} className="whatsappContainer" >
                        {/* <Image src={whatsapp} alt='whatsapp' className="whatsapp"/> */}
                        <p className="btn-send">Enviar <i className="fab fa-whatsapp"></i></p>
                    </a>}
            </div>

            <div className="ComeBackContainer" onClick={props.Sushi}></div>
            <div className="Triangle" onClick={props.Sushi}></div>
        </div>
    )
}

export default Order;