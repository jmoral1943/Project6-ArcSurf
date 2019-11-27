import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../../assets/images/Arc_Surf.svg";
import search from "../../../assets/images/search.svg";
import cart from "../../../assets/images/cart.svg";
import Hamburger from "./HamburgerIcon";
import * as actionTypes from "../../../store/actions";
import httpClient from "../../../httpClient";

const Header = props => {
  const [navOpen, setNav] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  const handleNavigation = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let hamburger = document.querySelector(".hamburger");

      let isNavOpen = navOpen;
      hamburger.classList.toggle("is-active");
      isNavOpen = !isNavOpen;
      setNav(isNavOpen);

      if (isNavOpen) {
        document.querySelector(".c-nav").style.opacity = "1";
      } else {
        document.querySelector(".c-nav").style.opacity = "0";
      }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));

  //   if (width >= 1000) {
  //     document.querySelector(".c-nav").style.opacity = "1";
  //   } else {
  //     document.querySelector(".c-nav").style.opacity = "1";
  //   }
  // });
  useEffect(() => {
    const user = httpClient.getCurrentUser();
    if (user == null) return;
    props.loadUser(user);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="c-header">
      {props.currentUser ? (
        <div className="c-header-signins">
          <Link to="/admin" className="c-header__signin">
            Admin
          </Link>
          <Link to="/" className="c-header__signin" onClick={props.logOut}>
            Sign out
          </Link>
        </div>
      ) : (
        <Link to="/signin" className="c-header__signin">
          Sign in or Join
        </Link>
      )}
      <div>
        <Hamburger handleNav={handleNavigation} />
        <Link to="/" className="c-nav__link--mobile">
          <img
            alt="logo"
            src={logo}
            onClick={() => {
              if (navOpen) {
                handleNavigation();
              }
            }}
          />
        </Link>
        <Link to="/cart">
          <img
            alt="Cart"
            src={cart}
            className="c-nav__carticon c-nav__carticon--mobile"
            onClick={() => {
              if (navOpen) {
                handleNavigation();
              }
            }}
          />
        </Link>
      </div>
      <nav className="c-nav">
        <ul className="c-nav__list">
          <li className="c-nav__item">
            <Link to="/" className="c-nav__link c-nav__link--desktop">
              <img alt="logo" src={logo} />
            </Link>
          </li>
          <li className="c-nav__item">
            <Link
              to="/products"
              className="c-nav__link"
              onClick={handleNavigation}
            >
              New Arrivals
            </Link>
          </li>
          <li className="c-nav__item">
            <Link
              to="/products"
              className="c-nav__link"
              onClick={handleNavigation}
            >
              Surfboards
            </Link>
          </li>
          <li className="c-nav__item">
            <Link
              to="/products"
              className="c-nav__link"
              onClick={handleNavigation}
            >
              Accessories
            </Link>
          </li>
        </ul>
        <div className="c-nav__icons">
          <img alt="Seach bar" src={search} className="c-nav__searchicon" />
          <Link to="/cart">
            <img
              alt="Cart"
              src={cart}
              className="c-nav__carticon c-nav__carticon--desktop"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: data => dispatch({ type: actionTypes.LOADUSER, data }),
    logOut: () => dispatch({ type: actionTypes.LOGOUT })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
