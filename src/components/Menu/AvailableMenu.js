import Card from "../general/Card";
import MenuItems from "./MenuItem/MenuItem";
import classes from "./AvailableMenu.module.css";

const sushiMenu = [
  {
    id: 1,
    dish: " Sunset",
    image: "/image/1.jpg",
    ingredients: "batat, avocado, batat chips, salmon gril",
    price: 38,
  },

  {
    id: 2,
    dish: " Tokio",
    image: " /image/2.jpg",
    ingredients: "cucumber, avocado, tuna, iritis, salmon",
    price: 39,
  },
  {
    id: 3,
    dish: " Dragon",
    image: " /image/3.jpg",
    ingredients: "cucumber, avocado, shrips, iritis, eel",
    price: 40,
  },
  {
    id: 4,
    dish: " Alaska ",
    image: " /image/4.jpg",
    ingredients: "shrimps, salmon, cucumber, cream cheese, avocado",
    price: 39,
  },
  {
    id: 5,
    dish: " Dynamite",
    image: " /image/5.jpg",
    ingredients: "cucumber, avocado, salmon gril, kolraby",
    price: 38,
  },
  {
    id: 6,
    dish: " Philadelphia",
    image: " /image/6.jpg",
    ingredients: "csalmon, cucumber, cream cheese, avocado, onion",
    price: 39,
  },
  {
    id: 7,
    dish: " California",
    image: " /image/7.jpg",
    ingredients: "cucumber, avocado, shrimps, tobiko, salmon",
    price: 39,
  },
  {
    id: 8,
    dish: " Canada",
    image: "/image/8.jpg",
    ingredients: "cucumber, cream cheese, avocado, tuna,shrimps, salmon",
    price: 40,
  },
  {
    id: 9,
    dish: "Green",
    image: " /image/9.jpg",
    ingredients: "cucumber, avocado, tuna, iritis, salmon",
    price: 39,
  },
  {
    id: 10,
    dish: " Samurai",
    image: " /image/10.jpg",
    ingredients: "cucumber, cream cheese, avocado, salmon, Red caviar",
    price: 39,
  },
];

const AvailableMenu = (props) => {
  const menuList = sushiMenu.map((menu) => (
    <MenuItems
      key={menu.id}
      id={menu.id}
      dish={menu.dish}
      ingredients={menu.ingredients}
      img={menu.image}
      price={menu.price}
      addItemToCart={props.addItemToCart}
    />
  ));
  return (
    <section className={classes.menu}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;
