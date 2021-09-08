import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';




const Header = () => {
  
  const [{ basket }] = useStateValue();

  console.log(basket);
  
    return(
        <nav className="header">
          <Link to="/">
            <img className="header-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
          </Link>

          <div className="header-search">
             <input type="text" className="header-searchInput"/>
             <SearchIcon className="header-searchIcon"/>
          </div>

          <div className="header-nav">
            <Link to="/login" className="header-link">
              <div className="header-option">
                <span className="header-option-1">Hello Harrison</span>
                <span className="header-option-2">Sign in</span>
              </div>
            </Link>
            <Link to="/" className="header-link">
              <div className="header-option">
                <span className="header-option-1">Return</span>
                <span className="header-option-2">Orders</span>
              </div>
            </Link>
            <Link to="/" className="header-link">
              <div className="header-option">
                <span className="header-option-1">Your</span>
                <span className="header-option-2">Prime</span>
              </div>
            </Link>
          </div>
            <Link to="/checkout" className="header-link">
              <div className="header-optionBasket">
                <ShoppingBasketIcon />
                <span className="header-option-2 header-basketCount" style={{ color: "orange" }} >
                  {basket?.length}
                </span>
              </div>
            </Link>
        </nav>
    );
}

export default Header;