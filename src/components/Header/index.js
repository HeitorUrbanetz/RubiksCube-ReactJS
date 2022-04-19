import React from "react";
import {Nav, H1, Links, A, B, Image} from "./style";
import { Link } from "react-router-dom";
import './style.css';

const Header = () => {
    return (
       <Nav>
           <Image src={require("../../assets/rubiks-2-512.png") }/>
           <Links >
                <Link className="A" to="/">HOME</Link>
                <A target="_blank" rel="noopener noreferrer" href="https://github.com/HeitorUrbanetz">GITHUB</A>
                <Link  className="B" to="/About">ABOUT ME</Link>
           </Links>
       </Nav>
    )
}

export default Header;