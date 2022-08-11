import { Fragment } from "react";
import { useState } from "react";
import Card from "./components/general/Card";

import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";

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
      <main>
        <Menu addItemToCart={addItemToCart} />
      </main>
    </Fragment>
  );
}

export default App;
