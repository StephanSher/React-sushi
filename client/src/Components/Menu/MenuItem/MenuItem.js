import MenuAdd from "./MenuAdd";
import classes from "./MenuItem.module.css";

const MenuItems = (props) => {
  return (
    <li className={classes.menu}>
      <div>
          <div className="img">
              <img className={classes.illustration} src={props.img} alt="" />
          </div>

          <div className={classes.cardItem}>
              <h3>{props.dish}</h3>
              <div className={classes.ingredients}>{props.ingredients}</div>
              <div className={classes.cardFooter}>
                  <div className={classes.price}>{props.price} ₪</div>
                  <div> <MenuAdd
                      id={props.id}
                      dish={props.dish}
                      ingredients={props.ingredients}
                      img={props.image}
                      price={props.price}
                      addItemToCart={props.addItemToCart}
                  />
                  </div>
              </div>
          </div>
      </div>


    </li>
  );
};

export default MenuItems;
