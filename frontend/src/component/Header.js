import React from 'react'
import "./Header.css"
import titanlogo from "../images/Titan-Logo.png"
import watch1 from "../images/CHRONOGRAPH_D.webp"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


const Header = () => {

const cartItems = useSelector((state) => state.cart.cartitems || []);
const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

const wishlistItems = useSelector((state) => state.wishlist.wishlistItems || []);
const wishCount = wishlistItems.length;



  return (



    <>
                    {/* motiontext */}
    <section className="container-fluid   topbar" >
      <span className="motion-text ">Use Code NEW10 and get 10% OFF* on non-discounted Watches over Rs. 2499. Maximum Discount: Rs. 1200. T&C Apply*. 
      </span>
    </section>
    {/* ===========first nav bar====== */}
    <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light firstnavbar ">
      <div className="container-fluid">
        <Link className="navbar-brand" to=""><i className='bx bx-menu iconmenu'>
        
        <    img className="mb-3" src={titanlogo} alt="titanlogo" width="120px" height="80px " /></i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav mx-auto align-items-center d-flex gap-3">

    {/* Search Box with Icon */}
    <form className="txtwithicon d-flex align-items-center">
      <i className="bx bx-search"></i>
      <input
        className="inputsearch"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>

    {/* Nav Icons List */}
    <ul className="navbar-nav lm d-flex align-items-center gap-3">

      {/* Account Dropdown */}
<li className="text-center">
  <Link to="/login" className="nav-link crt">
    <i className="bx bx-user fs-4"></i>
    <h6 className="mb-0">Account</h6>
  </Link>
</li>


      {/* Wishlist */}
      <li className="text-center ms-2">
        <Link to="/wishlist" className="crt position-relative d-inline-block">
          <i className="bx bx-heart fs-4"></i>
          {wishCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge bg-dark px-1 py-0" style={{ fontSize: '0.6rem', color: 'white' }}>
              {wishCount}
            </span>
          )}
          <h6>Wishlist</h6>
        </Link>
      </li>

      {/* Cart */}
      <li className="text-center ms-3">
        <Link to="/cartpage" className="mycart position-relative d-inline-block">
          <i className="bx bx-cart fs-4"></i>
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge bg-dark px-1 py-0" style={{ fontSize: '0.6rem', color: 'white' }}>
              {cartCount}
            </span>
          )}
          <h6>Cart</h6>
        </Link>
      </li>

      {/* Track Order */}
      <li className="text-center ms-3">
        <i className="bx bx-search fs-4"></i>
        <h6>Track Order</h6>
      </li>

    </ul>
  </div>
</div>

      </div>
</nav>
    </section>
    {/* =========second nav bar====== */}

    <section className="secondnav" >
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light secondnav">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav secnavul">
      <li className="nav-item dropdown ml-5">
  <Link to="/Men" className="nav-link" href="#" id="menDropdown" role="button">
    MEN
  </Link>
  <div className="dropdown-menu header-menu largdrop p-3" aria-labelledby="menDropdown">
    <div className="row h-100">
      
      {/* <!-- First Column --> */}
      <div className="col-lg-4 menu-col">
        <div className="menu-item" data-category="trending">TRENDING</div>
        <div className="menu-item" data-category="looks">SHOP BY LOOKS</div>
        <div className="menu-item" data-category="smart">SMART WATCHES</div>
      </div>
      
      {/* <!-- Second Column: Submenu --> */}
      <div className="col-lg-4 submenu-col" id="submenuCol">
        {/* <!-- Filled by JS --> */}
      </div>

      {/* <!-- Third Column: Image Preview --> */}
      <div className="col-lg-4 image-preview">
        <img id="previewImage" src="https://via.placeholder.com/300x300?text=Hover+Item" height="300" width="290" alt="Preview" />
      </div>
      
    </div>
  </div>
</li>
 
        <li className="nav-item dropdown">
        <Link to="/women" className="nav-link " href="#" id="hoverDropdown" role="button">
          WOMEN
        </Link>
       
        </li>
        <li className="nav-item dropdown">
        <Link to="/smartwatch" className="nav-link " href="#" id="hoverDropdown" role="button">
          SMART WATCHES
        </Link>
        
        </li>
        <li className="nav-item dropdown">
          
        <Link className="nav-link " to="#" id="hoverDropdown" role="button">
          PREMIUM WATCHES
        </Link>
       
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to="#" id="hoverDropdown" role="button">
          INTERNATIONAL BRANDS
        </Link>
       
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link " to="/Upload" id="hoverDropdown" role="button">
          UPLOAD
        </Link>
       
        </li>
        {/* <li className="nav-item dropdown">
        <Link className="nav-link " to="/Update" id="hoverDropdown" role="button">
          UPDATE
        </Link>
      
        </li> */}
        <li className="nav-item dropdown">
        <Link className="nav-link " to="/myupload" id="hoverDropdown" role="button">
         ADMIN
        </Link>
      
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link " href="#" id="hoverDropdown" role="button">
          WATCH SERVICE
        </a>
       
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link " href="#" id="hoverDropdown" role="button">
          MORE
        </a>
      
        </li>
       
      </ul>
      
    </div>
</nav>

    </section>
    </>
  )
}

export default Header