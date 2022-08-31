import { Fragment } from "react";
import { useState } from "react";
import Card from "./Components/General/Card";

import Header from "./Components/Layout/Header";
import Menu from "./Components/Menu/Menu";
import Informaciya from "./Components/Layout/Informaciya";
import  Footer from './Components/Layout/Footer'

function App() {
  const [cartOrders, setCartOrders] = useState([]);

  const totalAmount = cartOrders.length;

  const addItemToCart = (item) => {
    setCartOrders((cartOrders) => {
      return [...cartOrders, item];
    });
  };

  const deleteOrder = (itemId) => {
    setCartOrders((cartOrders) => {
      return cartOrders.filter((order) => order.itemId !== itemId);
    });
  };

  return (
    <Fragment>
      <Header
        cartOrders={cartOrders}
        totalAmount={totalAmount}
        deleteOrder={deleteOrder}
      />
        <Informaciya/>
      <main>
        <Menu addItemToCart={addItemToCart} />
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
