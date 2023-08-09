import React, { useState } from "react";
import { styled } from "styled-components";
import Navbar from "./nav-pages/Navbar";
import { NavLink } from "react-router-dom";
import { User } from "./nav-pages/User";
import { BiSolidLogInCircle } from "react-icons/bi";
import CartIcon from "../components/cart/CartIcon";

const Header = ({ cartSize }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Wrapper>
      <div className="header">
        <div className="header-fixed">
          <div className="top-nav container d-flex justify-content-between">
            <div className="logo">
              <NavLink to={"/"}>
                <img
                  src="/project-konnect/images/konnect-logo.png"
                  alt="Konect-Logo"
                />
              </NavLink>
            </div>
            <div className="menu">
              <Navbar cartSize={cartSize} />
            </div>

            <div className="login d-flex gap-3">
              <div>
                <NavLink to={"/login"}>
                  <button
                    onClick={() => setLoggedIn(!loggedIn)}
                    className="butn signup-button d-flex gap-2"
                  >
                    {loggedIn ? "Login" : "Logout"}

                    <BiSolidLogInCircle />
                    <User />
                  </button>
                </NavLink>
              </div>
              <div className="cart-icon">
                <NavLink to="/cart" className="cart-icon-box">
                  <CartIcon size={cartSize} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .top-nav {
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    height: 65px;
  }

  a {
    text-decoration: none;
  }
  .syc {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .header {
    /* z-index: 9999; */
    background-color: ${({ theme }) => theme.colors.white};

    height: 65px;
    .header-fixed {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 25px 0px;
      width: 100%;
      position: fixed;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 99;
    }
    .logo {
      /* background-color: ${({ theme }) => theme.colors.white}; */
      /* padding: 10px; */

      img {
        width: 165px;
      }
    }
    .butn {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      padding: 6px 20px 6px 20px;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      border-radius: 25px;
      svg {
        fill: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
      }
    }
  }

  .searchBox {
    background-color: #00aeef;
    border-radius: 5px;
    padding: 0;
  }
  .select-box {
    color: #fff;
    background-color: #00aeef;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    outline-style: none;
    option {
      color: #fff;
    }
    &:focus {
      outline-style: none;
    }
  }
  .input {
    border: none;
    text-decoration: none;
    margin: 5px;
    padding: 5px 15px;
    border-radius: 5px;
    &:focus {
      outline-style: none;
    }
  }
  .cart-icon {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    svg {
      font-size: 22px;
      fill: ${({ theme }) => theme.colors.primary};
    }
    span {
      position: absolute;
      color: ${({ theme }) => theme.colors.white};
      top: -12px;
      height: 15px;
      width: 15px;
      /* background-color: red; */
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
