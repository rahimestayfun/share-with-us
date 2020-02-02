import React from 'react';
import "../../styles/Footer.css"

function Footer(){
    let currentTimeLine = new Date();
    let currentYear =currentTimeLine.getFullYear
    return(
        <div className="footer">
            <h3>{currentYear}</h3>
        </div>
    )
}
export default Footer;