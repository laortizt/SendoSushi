import React from 'react';
import './../styles/Order.css';
import OrderItem from './OrderItem';

function Order(props) {
    const {cartItems, handleAdd, handleSubstract} = props;

    const deliveryCost = 3000;
    const subTotal = cartItems.reduce((a, c) => a + c.price * c.qty * 1000, 0);
    const subTotalCostFormatted = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 2})).format(subTotal)
    const deliveryCostFormatted = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 2})).format(deliveryCost)
    const totalCostFormatted = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 2})).format(subTotal + deliveryCost)

    const getEmoji = (category) => {
        switch(category) {
            case "sushi":
                return "🍣";
            case "combos":
                return "🍱";
            case "ceviche":
                return "🍤";
            case "wok":
                return "🥡";
            case "bebidas":
                return "🥤";
            default:
                return "";                                
        }
    }

    //función build whatsapp url
    const getWhatsappString=()=>{
        let str ='';
        cartItems.forEach(item => {
            if (item.qty !== 0)
                { let subst= `* ${item.name}: ${item.qty} precio: $${item.qty * item.price * 1000}, \r\n`;
                    str+=subst;}
        })

        str = `${str} TOTAL: ${totalCostFormatted}`;

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
                                    icon={getEmoji(item.category)}
                                    product={item} 
                                    name={item.name}
                                    price={item.price * 1000}
                                    quantity={item.qty}
                                    onAddToCart={handleAdd}
                                    onRemoveFromCart={handleSubstract}/>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {cartItems.length > 0 &&
                    <div>
                        <div className="order-cost-container">
                            <div className="order-cost order-subtotal">
                                <span>Subtotal:</span>
                                <span>{subTotalCostFormatted}</span>
                            </div>
                            <div className="order-cost order-delivery">
                                <span>Domicilio:</span>
                                <span>{deliveryCostFormatted}</span>
                            </div>
                            <div className="order-cost order-total">
                                <span>Total:</span>
                                <span>{totalCostFormatted}</span>
                            </div>
                        </div>

                        <a href={getWhatsappString()} className="whatsappContainer" >
                            {/* <Image src={whatsapp} alt='whatsapp' className="whatsapp"/> */}
                            <p className="btn-send">Enviar <i className="fab fa-whatsapp"></i></p>
                        </a>                        
                    </div>}
            </div>

            <div className="ComeBackContainer" onClick={props.Sushi}></div>
            <div className="Triangle" onClick={props.Sushi}></div>
        </div>
    )
}

export default Order;