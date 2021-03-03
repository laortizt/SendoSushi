import React from 'react';
import './../styles/Order.css';


function Order(props) {
    const {cartItems} = props;

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

        return `http://wa.me/573058278323?text=${window.encodeURIComponent(str)}` //lleva ''??
    }
    return(
        <div>
            {/* <h1 className="OrderTitle">Order</h1> */}

            <div className="ItemOrderContainer">
                {cartItems.map((item)=>(
                    // <ProductContainerTWo
                    // key={item.id}
                    // product={product}
                    // onAdd={onAdd}
                    // onRemove={onRemove}
                    // />
                    <span key={item.id}>{item.name}</span>
                ))}
            </div>

            <div className="TotalListContainer">
                <div className="OrderListContainer">
                    {cartItems.length === 0 &&
                        <div className="Text">
                            Aún no hay productos en el carrito
                        </div>}

                    <ul className="ShoppingList">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="OrderButtonContainer">
                                    {item.qty} {item.name} {item.price * item.qty}
                                    {/* <button onClick={()=> handleAdd(item)} className="buttonOrder">+</button>;
                                    <button onClick={()=> handleSubstract(item)} className="buttonOrder">-</button>; */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {cartItems.length > 0 &&
                    <a href={getWhatsappString()} className="whatsappContainer" >
                        {/* <Image src={whatsapp} alt='whatsapp' className="whatsapp"/> */}
                        <p className="Send">Enviar pedido</p>
                    </a>}
            </div>

            <div className="ComeBackContainer" onClick={props.Sushi}></div>
            <div className="Triangle" onClick={props.Sushi}></div>
        </div>
    )
}

export default Order;