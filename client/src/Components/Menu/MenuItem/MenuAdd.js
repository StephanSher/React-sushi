import classes from "./MenuAdd.module.css";

const MenuAdd = (props) => {
  const addButtonHandler = () => {
    const currentItem = {
      itemId: Math.random(),
      id: props.id,
      dish: props.dish,
      ingredients: props.ingredients,
      img: props.image,
      price: props.price,
    };
    props.addItemToCart(currentItem);
  };

  return (
    <div className={classes.addOrder}>
      <button onClick={addButtonHandler}>Add to Cart</button>
    </div>
  );
};
export default MenuAdd;
