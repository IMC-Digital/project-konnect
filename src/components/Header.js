import { styled } from "styled-components";

import DynamicImage from "./requiredPages/DynamicImage";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <div className="header ">
        <div className="top-nav container d-flex justify-content-between">
          <div className="logo">
            <NavLink to={"/"}>
              <DynamicImage imageName={"konnect-logo.png"} width={300} />
            </NavLink>
          </div>

          <div className="searchBox d-flex gap-2">
            <select className="select-box">
              <option className="cities" value="meat">
                Select Your City
              </option>
              <option className="cities" value="meat">
                Hyderabad
              </option>
              <option className="cities" value="meat">
                Bangalore
              </option>
              <option className="cities" value="meat">
                Sangareddy
              </option>
              <option className="cities" value="meat">
                Warangal
              </option>
              <option className="cities" value="meat">
                Nizamabad
              </option>
              <option className="cities" value="meat">
                Nellore
              </option>
              <option className="cities" value="meat">
                Kurnool
              </option>
              <option className="cities" value="meat">
                Karimnagar
              </option>
              <option className="cities" value="meat">
                Nandyal
              </option>
              <option className="cities" value="meat">
                Gulbarga
              </option>
            </select>
            <input
              className="input"
              type="text"
              placeholder="Search Tests/Package"
              // value="sdf"
              // onChange={}
            />
          </div>
          <div className="register d-flex">
            <div>
              <button className="butn signup-button d-flex gap-2" onClick={"/"}>
                Login / SignUp
                <DynamicImage imageName={"/icons/signup.svg"} />
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
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
`;