import React from 'react';
import {Link} from "react-router-dom";
import './../../styles/Header.css';

function Header(){
    return(
        <div className="headerContainer">
          <Link to="/" id="storepory"> <h1 id="storyTitle">Storepory</h1></Link>
        </div>
    )
}
export default Header;