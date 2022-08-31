import Card from "../General/Card";
import MenuItems from "./MenuItem/MenuItem";
import classes from "./AvailableMenu.module.css";
import {useEffect, useState} from "react";
import {config} from '../../config.js'

const AvailableMenu = (props) => {

    const [menuItems, setMenuItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(config.baseUrl + '/products').then(async (response) => {
            let data = await response.json();
            setMenuItems(data)
            setIsLoading(false);
        });
    }, []);


    // fetch(config.baseUrl + '/products').then((response) => {
    //     response.json().then((item) => {
    //         setMenuItems(items);
    //     });
    // });

    const menuList = menuItems.map((menu) => (
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
                {isLoading && <div>Loading...</div>}
                {!isLoading && <ul>{menuList}</ul>}
            </Card>
        </section>
    );
};

export default AvailableMenu;
