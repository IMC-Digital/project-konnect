import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import CartIcon from "../../components/cart/CartIcon";

const Navbar = ({cartSize}) => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg   ">
        <div className=" p-0 container d-flex justify-content-between">
          <ul className="navbar-lists navbar-nav d-flex">
            <li>
              <NavLink to="/" className="nav-list">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-list">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/tests" className="nav-list">
                Tests
              </NavLink>
            </li>
            <li>
              <NavLink to="/home-collection" className="nav-list">
                Home Collection
              </NavLink>
            </li>
            <li>
              <ul>
                <li className="services ">
                  <NavLink to="/services" className="nav-list">
                    Services
                  </NavLink>
                  <ul className="subMenu">
                    <li className="subMenuItem ">
                      <NavLink to="/health-conditions" className="sub-nav-list ">
                        Health Conditions
                      </NavLink>
                    </li>
                    <li className="subMenuItem ">
                      <NavLink to="/radiology-services" className="sub-nav-list">
                        Radiology Services
                      </NavLink>
                    </li>
                    <li className="subMenuItem ">
                      <NavLink to="/fetal-medicine-unit" className="sub-nav-list">
                        Fetal Medicine Unit
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/packages" className="nav-list">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/locate-clinic" className="nav-list">
                Locate Clinic
              </NavLink>
            </li>
            <li>
              <NavLink to="/partner-with-us" className="nav-list">
                Partner With US
              </NavLink>
            </li>
          </ul>
          <div className="cart-icon">
            <NavLink to="/cart" className="cart-icon-box">
              <CartIcon size={cartSize} />
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.section`
  .navbar {
    z-index: 98;
  }
  .cart-icon {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    svg {
      font-size: 25px;
      fill: ${({ theme }) => theme.colors.white};
    }
    span {
      position: absolute;
      color: ${({ theme }) => theme.colors.white};

      top: -15px;
      height: 15px;
      width: 15px;
      /* background-color: red; */
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: 0;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .nav-list {
    font-size: 1rem;
    letter-spacing: 0.5px;
    border-bottom: 1.5px solid transparent;
    line-height: 1.8;
    transition: 0.3s;

    &:hover {
      border-bottom: 1.5px solid #fff;
    }
  }
  .services {
    list-style: none;
    position: relative;
    .subMenu {
      /* border: 2px solid red; */
      position: absolute;
      list-style: none;
      width: 225px;
      display: none;
      background-color: ${({ theme }) => theme.colors.primary};
      top: 1.8rem;
      left: -1rem;
      transition: 0.3s;
      border-radius: 0 0 5px 5px;
      padding: 10px 15px;
      .subMenuItem {
        margin-bottom: 5px;
      }
      .sub-nav-list {
        color: #fff;
        &:hover {
          transition: 0.3s;
          padding-bottom: 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.white};
          overflow: hidden;
        }
      }
    }

    &:hover .subMenu {
      display: block;
    }
  }

  .navbar {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
