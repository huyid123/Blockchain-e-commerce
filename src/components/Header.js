import React, { Component } from 'react';
import '../css/Header.css';


class Header extends React.Component {

    //const [{ basket }] = useStateValue();

    render(){ 
        let account= localStorage.getItem("account")
        return (
            <nav className="header">
                {/* logo on the left */}           
                        <div className="header__logo"></div>
                {/* search box */}
                <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    
                </div>
                {/* 3 links */}
                <div className="header__nav">
                        <div className="header__option">
                            <a><span className="header__optionLineOne">Account</span></a>
                            <a><span className="header__optionLineTwo">{account }</span></a>
                        </div>
                        <div className="header__option">
                            <a><span className="header__optionLineOne">Return</span></a>
                            <a><span className="header__optionLineTwo">& Orders</span></a>
                        </div>
                        <div className="header__option">
                            <a><span className="header__optionLineOne">Your</span></a>
                            <a><span className="header__optionLineTwo">Prime</span></a>
                        </div>
                </div>
{/*                 
                Basket with the number of order
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">

                        <ShoppingBasketIcon />
                        //<a><span className="header__optionLineTwo header__basketCount">{basket?.length}</span></a>
                    </div>
                </Link> */}
            </nav>
        )
    }
}

export default Header;