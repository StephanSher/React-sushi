import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={classes.footerContainer}>
                    <div ><b>Dear friends!</b>
                        <p><i>If you have any complaints about the order,
                            you can contact the quality control department.</i>
                        <p><b>by phone: +972-052-000-1111</b></p>
                           </p>
                        <b>e-mail:<a href="papa_ku@gmail.com">papa_ku@gmail.com</a></b>
                    </div>
                <div><b>Social Media:</b></div>
                <p><b><a href="https://twitter.com/?lang=en">Twitter</a></b></p>
                <p><b><a href="https://www.facebook.com/facebook/">Facebook</a></b></p>
                <p><b><a href="https://www.instagram.com/">Instagram</a></b></p>





            </div>
        </div>
    );
};

export default Footer;
