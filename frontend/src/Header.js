import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "./images/logo.png"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchText, setSearchText] = React.useState("");
  const history = useHistory();

  const handleAuthenticaton = () => {
    console.log("Handle auth");
  }

  const handleSubmit = (e) =>{
    if(e.keyCode==13){
      e.preventDefault();
      console.log(searchText);
      dispatch(
        {
          type:"SEARCH_TEXT",
          text: searchText
        }
      )
    }
   
  }

  console.log(searchText)

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" onChange={(e) => setSearchText(e.target.value)} onKeyDown={handleSubmit}/>
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        {/* <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello user</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link> */}

        <Link to="/checkout">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Selections
          <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span> </span>
          
        </div>
        </Link>

        <Link to="/dashboard/profile">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Dashboard</span>          
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
