import React from 'react';
import classes from './Informaciya.module.css'

const Informaciya = (props) => {
    return (
        <div>
            <ul className={classes.informaciya}>
                <li><a href="#">Sushi Set</a> </li>
                     <li><a href="#">Rolls</a></li>
                     <li><a href="#">Baked Rolls</a></li>
                   <li><a href="#">Sushi</a></li>
                     <li><a href="#">WOK</a></li>
                     <li><a href="#">Business lunches</a></li>
                     <li><a href="#">Hot Food</a></li>
                     <li><a href="#">Appetizers and Salads</a></li>
                    <li><a href="#">Soup</a></li>
                    <li><a href="#">Desserts</a></li>
                     <li><a href="#">Drinks</a></li>
                     <li><a href="#">Pie</a></li>
                <li className={classes.line}></li>
                     <li><i><a href="#">About Us</a></i></li>
                     <li><i><a href="#">Recall</a></i></li>
                     <li><i><a href="#">Job Vacancies</a></i></li>
                </ul>
        </div>
    );
};

export default Informaciya;


//