import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const[{basket} /** dispacther */] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img 
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>
        
        <div 
        className="header__search">
            <input type="text"
             className="header__searchInput"/>
             <SearchIcon
             className="header__searchIcon"/>
        </div>

        <div className="header__nav">

          <Link to="./login">
            <div className="header__option">
                <span 
                className='header__optionLineOne'>
                  Olá, faça seu login
                </span>
                <span 
                className='header__optionLineTwo'>
                  Conta
                </span>
            </div>
          </Link>
          
            <div className="header__option">

            </div>

            <div className="header__option">
              <span 
                className='header__optionLineOne'>
                  Devoluções
                </span>
                <span 
                className='header__optionLineOne'>
                  e Pedidos
                </span>            
            </div>  

            <div className="header__option">
              <span 
                className='header__optionLineOne'>
                  Experimente
                </span>            
                <span 
                className='header__optionLineOne'>
                  Prime
                </span>
            
            </div>    

          <Link to="/checkout">
            <div className="header__optionBasket">
              
                <ShoppingBasketIcon/>
            
              <span className="header__optionLineTwoheader__basetCount">
              {basket?.length}
              </span>
            </div> 
          </Link>
          
        </div>
    </div>
  )
}

export default Header;
