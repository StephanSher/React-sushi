import MenuAdd from "./MenuAdd";
import classes from "./MenuItem.module.css";

const MenuItems = (props) => {
  return (
    <li className={classes.menu}>
      <div>
        <h3>{props.dish}</h3>
        <div className={classes.ingredients}>{props.ingredients}</div>
        <div className={classes.price}>{props.price} ₪</div>
      </div>
      <div className={classes.img}>
        <img src={props.img} alt="" />
      </div>
      <div>
        <MenuAdd
          id={props.id}
          dish={props.dish}
          ingredients={props.ingredients}
          img={props.image}
          price={props.price}
          addItemToCart={props.addItemToCart}
        />
      </div>
    </li>
  );
};

export default MenuItems;
