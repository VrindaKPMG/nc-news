import React from "react";


import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="vbc-header">
            <img src="http://cdn.shopify.com/s/files/1/0524/8873/2845/files/Logo_No_Shadow.png?v=1665947160" className="vbc" alt="vbc logo" height='100px' />
            <Link className="VBC_title" to="/">
            <h1>Vrinda's Broadcasting Corporation</h1>
            </Link>
            
        </header>
    );
};

export default Header;