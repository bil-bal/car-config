import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to={"/"} style={{textDecoration:'none', color:"black"}}>
            <h1>Car Config</h1>
        </Link>
    )
};

export default Header;