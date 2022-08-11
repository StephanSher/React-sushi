import React, { Fragment } from "react";
import SummaryMenu from "./SummaryMeny";
import AvailableMenu from "./AvailableMenu";

const Menu = (props) => {
  return (
    <Fragment>
      <SummaryMenu />
      <AvailableMenu addItemToCart={props.addItemToCart} />
    </Fragment>
  );
};
export default Menu;
