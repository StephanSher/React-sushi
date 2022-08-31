import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Image/1.jpg";
import MainLogo from "../../Image/main.jpg";
import ShopCart from "./ShopCart.js";
import { IoIosRocket } from "react-icons/io";
import { VscLocation } from "react-icons/vsc";
import { BsPhoneVibrate } from "react-icons/bs";



const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img  src={MainLogo} alt={""} />
            <h1>SUSHIBAR</h1>
        </div>
          <div className={classes.location}><a href='https://www.google.com/maps/place/
          Lehavot+HaBashan/@33.1430311,35.6447488,15.23z/data=
          !4m5!3m4!1s0x151ea378f5fed5db:0x4180a0517b2920ad!8m2!3d33.1412178!4d35.6478714?hl=en'>
              <VscLocation className={classes.svgLocation}/>
              <b>Lehavot HaBashan</b></a>
          </div>

          <div className={classes.delivery}><a href='#'>
              <IoIosRocket className={classes.svgDelevery}/>
              <b>Delivery</b>
          </a>

          </div>
          <div className={classes.telephone}>
              <BsPhoneVibrate className={classes.svgTelephone}/>
              <b>
                  <div>Tel: (+972-054-817-6805)</div>
              </b>

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
