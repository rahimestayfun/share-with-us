import React from 'react';
import "../../styles/Footer.css"

function Footer(){
    let currentTimeLine = new Date();
    let currentYear =currentTimeLine.getFullYear()
    return(
        <div className="footer">
            <p>	&copy;{currentYear}   Storepory</p>
        </div>
    )
}
export default Footer;