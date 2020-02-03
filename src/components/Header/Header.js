import React from 'react';
import {Link} from "react-router-dom";
import './../../styles/Header.css';

function Header(){
    return(
        <div className="headerContainer">
          <Link to="/" id="storepory"> <h1 id="storyTitle">Sto-repo-ry</h1></Link>
            {/* <input id="input" placeholder="Search for category"></input> */}
        </div>
    )
}
export default Header;