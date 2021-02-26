import React from 'react'; 
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Item from './components/Item'
import './styles/App.css';

const App = () => {

  return (
    <div className="app-container">
      <Header/>
      <Nav/>
      <div className="container-products">
        <Item name="Sendo" price="22" ingredients="Cangrejo, pescado blanco, queso crema, topping de langostino gratinado de queso y salsa de maracuyá" category="sushi"/>
        <Item name="Samurai" price="18" ingredients="Pescado blanco, aguacate, queso crema y topping de ajonjolí "category="sushi"/>
        <Item name="Kioto" price="15" ingredients="Cangrejo, vegetales, queso crema y topping de aguacate"category="sushi"/>
        <Item name="Fuji" price="22" ingredients="Tilapia apanada, aguacate y topping de langostinos tempurizados"category="sushi"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
