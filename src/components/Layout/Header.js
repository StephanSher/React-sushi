import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../image/1.jpg";
import MainLogo from "../../image/main.jpg";
import ShopCart from "./ShopCart.js";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SUSHIBAR</h1>
        <div>
          <img width={140} height={80} src={MainLogo} alt={""} />
        </div>
        <ShopCart
          cartOrders={props.cartOrders}
          totalAmount={props.totalAmount}
          deleteOrder={props.deleteOrder}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
