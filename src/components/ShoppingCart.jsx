import React from 'react';
import Header from "./Header";
//import data from "./../data/data";
import './../styles/ShoppingCart.css';
import Order from './Order';


function ShoppingCart(props) {
    const {showCart, onSetShowCart, cartItems, onAddToCart, onRemoveFromCart} = props;
    //const {PRODUCTS} = data;
    //const [status, setStatus] = useState(0);
    //const [products, setProducts] = useState(PRODUCTS); //duplica el array para modificar
   
    // Función para añadir items al carrito
    const handleAdd = (item) => {
        onAddToCart(item);
        // const category = products.find(y => y.id === item.id); //????
        // setProducts(products.map(y => y.id === item.id?
        //     {...category, price: category.price+1}:y));
    }

    // Función para quitar items del carrito
    const handleSubstract = (item) => {
        onRemoveFromCart(item);
        // const category = products.find(y => y.id === item.id); //que es y  y x ???? 

        // if (category.price > 0){
        //     setProducts(products.map(y => y.id === item.id? 
        //         {...category, price: category.price -1} : y))
        // }
    }

    // //Funciones que definene que se muestra en pantalla
    // const sushiStatus = ()=>{
    //     setStatus(0);
    // }

    // const combosStatus = ()=>{
    //     setStatus(0);
    // }

    // const cevicheStatus = ()=>{
    //     setStatus(0);
    // }

    // const wokStatus = ()=>{
    //     setStatus(0);
    // }

    // const bebidasStatus = ()=>{
    //     setStatus(0);
    // }

    const onHideCart = () => {
        onSetShowCart(false)
    }

    return (
        <div className={showCart ? 'shopping-cart' : 'shopping-cart shopping-cart--hidden'}>
            <div onClick={onHideCart}>Volver</div>

            <Header/>

            <div>Mi pedido</div>

            <Order cartItems={cartItems} 
                handleAdd={handleAdd}
                handleSubstract={handleSubstract} />
        </div>
    );

    // return (
    //     <div className="app-container">
        
    //         <div className="containerProducts">
    //         {(status < 4)?
    //             <CategoryContainer // qes mi componente items?
    //                 sushi = {sushiStatus}
    //                 combos = {combosStatus }
    //                 ceviche = {cevicheStatus}
    //                 wok = {wokStatus}
    //                 bebidas = {bebidasStatus}
    //             />: ''
    //         }

    //         <div className="listContainer">
    //             {newProducts.map((Item) => {
    //                  if (status ===0){
    //                      return(
    //                     (Item.category === 'sushi')?
    //                     <div>
    //                         <Item //product category ??? 
    //                         key={Item.id}
    //                         product={product}
    //                         handleAdd={handleAdd}
    //                         handleSubstract={handleSubstract}
    //                         />
    //                     </div>: ''
    //                      )
    //                  }else if (status ===1){
    //                      return(
    //                         (Item.category === 'combos')?
    //                             <div>
    //                             <Item //product category ??? 
    //                             key={Item.id}
    //                             product={product}
    //                             handleAdd={handleAdd}
    //                             handleSubstract={handleSubstract}
    //                             />
    //                         </div>: ''
    //                      )
    //                  }else if (status ===1){
    //                     return(
    //                        (Item.category === 'ceviche')?
    //                            <div>
    //                            <Item //product category ??? 
    //                            key={Item.id}
    //                            product={product}
    //                            handleAdd={handleAdd}
    //                            handleSubstract={handleSubstract}
    //                            />
    //                            </div>: ''
    //                     )
    //                 }else if (status ===1){
    //                     return(
    //                        (Item.category === 'combos')?
    //                            <div>
    //                            <Item //product category ??? 
    //                            key={Item.id}
    //                            product={product}
    //                            handleAdd={handleAdd}
    //                            handleSubstract={handleSubstract}
    //                            />
    //                            </div>: ''
    //                     )
    //                 }else if (status ===1){
    //                     return(
    //                        (Item.category === 'wok')?
    //                            <div>
    //                            <Item //product category ??? 
    //                            key={Item.id}
    //                            product={product}
    //                            handleAdd={handleAdd}
    //                            handleSubstract={handleSubstract}
    //                            />
    //                            </div>: ''
    //                     )
    //                 }else if (status ===1){
    //                     return(
    //                        (Item.category === 'bebidas')?
    //                            <div>
    //                            <Item //product category ??? 
    //                            key={Item.id}
    //                            product={product}
    //                            handleAdd={handleAdd}
    //                            handleSubstract={handleSubstract}
    //                            />
    //                            </div>: ''
    //                     )
    //                 }else {
    //                     return ('')
    //                 }
    //             })}
    //         </div>
    
    //         {/* donde se le pasa el carrito */}
    //         {(status === 4)?
    //             <Order  
    //                 carItems={carItems}
    //                 sushi = {sushiStatus}
    //                 sushi = {combosStatus }
    //                 sushi = {cevicheStatus}
    //                 sushi = {wokStatus}
    //                 sushi = {bebidasStatus}
    //             /> : ''
    //         }

    //         {(status < 4)?
    //             <BackButton Text ='Ver orden' Order={orderStatus}/> : ''
    //         }

    //         <Total carItems={carItems}/>
    //         </div>
            
    //     </div>
    // )
}

export default ShoppingCart;