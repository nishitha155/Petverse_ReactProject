
import { useState } from 'react';
import './Header.css';
import logoo from '../assets/Petverse_logo.jpeg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { userid } = useParams();


  return (
    <>
      <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
        <Link to={`/user/main/${userid}`}>
        <img src={logoo} alt="Logo" />
        </Link>
        </div>
        <div className="user-actions">
          <div className="user-action-group">

          <button className="user-button">
              <Link to={`/user/products/${userid}/CAT`} style={{ textDecoration: 'none', color: 'white' }}>
                <span className="label" style={{ textDecoration: 'none', color: 'white',padding: '2rem' }}>Cat</span>
              </Link>
            </button>
          </div>

          <div className="user-action-group">

          <button className="user-button">
              <Link to={`/user/products/${userid}/DOG`} style={{ textDecoration: 'none', color: 'white' }}>
                <span className="label" style={{ textDecoration: 'none', color: 'white',padding: '2rem' }}>Dog</span>
              </Link>
            </button>
          </div>

          <div className="user-action-group">

          <button className="user-button">
    <Link to={`/user/salon/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
      <span className="label" style={{ textDecoration: 'none', color: 'white',padding: '2rem' }}>Salon</span>
    </Link>
         </button>
        </div>
          
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {isMenuOpen && <>
          <div className="user-action-group">

          <button className="user-button">
              <Link to='/user/products/CAT' style={{ textDecoration: 'none', color: 'white' }}>
                <span className="label" style={{ textDecoration: 'none', color: 'white' }}>Cat</span>
              </Link>
            </button>
          </div>

          <div className="user-action-group">
          <button className="user-button">
              <Link to={`/user/products/${userid}/DOG`} style={{ textDecoration: 'none', color: 'white' }}>
                <span className="label" style={{ textDecoration: 'none', color: 'white',padding: '2rem' }}>Dog</span>
              </Link>
            </button>

           
          </div>

          <button className="user-button">
            <span className="label">
            <Link to={`/user/salon/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
                Salon
              </Link>
            </span>
          </button>
          <button className="user-button">
            <FontAwesomeIcon icon={faUser} />
            <span className="label" style={{ textDecoration: 'none', color: 'white' }}>
              <Link to={`/User/DashBoard/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
                Account
              </Link>
            </span>

          </button>
          <button className="user-button">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="label" style={{ textDecoration: 'none', color: 'white' }}>
            <Link to={`/user/cart/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
                cart
              </Link>
            </span>
          </button>
          <button className="user-button">
            <FontAwesomeIcon icon={faHeart} />
            <span className="label" style={{ textDecoration: 'none', color: 'white' }}>Wishlist</span>
          </button>
          <button className="user-button">Logout</button>
        </>}
        
        <div className="user-actions">
          <button className="user-button">
            <FontAwesomeIcon icon={faUser} />
            <span className="label">
              <Link to={`/User/DashBoard/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
                Account
              </Link>
            </span>

          </button>
          <button className="user-button">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="label">
            <Link to={`/user/cart/${userid}`} className='custom-link' style={{ textDecoration: 'none', color: 'white' }}>
                Cart
              </Link>
            </span>
          </button>
          <button className="user-button" >
            <FontAwesomeIcon icon={faHeart} />
            <Link to={`/user/wishlist/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>
            <span className="label" style={{ textDecoration: 'none', color: 'white' }}>Wishlist</span >
              </Link>
            
          </button>
          <button className="user-button">
          <Link to={`/user/logout/${userid}`} style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;