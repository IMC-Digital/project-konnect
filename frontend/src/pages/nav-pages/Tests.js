import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu, GiHeartOrgan } from "react-icons/gi";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
// import { TestCard, cardData } from "./requiredPages/TestCard";

const Tests = () => {
  return (
    <Wrapper className="tests">
      <div className="banner-bg d-flex">
        <div className="banner-cnt container flex">
          <h2>Tests</h2>
          <p>
            <span>Home</span>
            <BiChevronsRight />
            tests
          </p>
        </div>
      </div>
      <div className="container tests-container d-flex">
        <div className="box-left ">
          <div className="categories box-mb">
            <h4 className="h4-style">Categories</h4>
            <Link className="active" to="/">
              All
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Anemia"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Bone"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Cancer "}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {" Diabetes"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Fever "}
            </Link>

            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Heart"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Kidney "}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {" Liver"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Pregnancy "}
            </Link>
          </div>
          <div className="Packages box-mb">
            <h4 className="h4-style">Packages</h4>
            <Link to="/">Bone </Link>
            <Link to="/">Cancer </Link>
            <Link to="/">Diabetes </Link>
            <Link to="/">Fever </Link>
          </div>
        </div>
        <div className="box-right ">
          <div className="box-right-top">
            <div className="categories  d-flex justify-content-between align-items-center">
              <div className="">
                <HiOutlineFilter />
                <GiHamburgerMenu />
              </div>

              <h6>225 Total Tests</h6>

              <Link to="/">
                {"Menu Item"}
                <CiMenuKebab />
              </Link>
            </div>
          </div>
          <div className="box-right-bottom ">
            <div className="box-mb ">
              <h6>All</h6>
              <div className="tst-group d-flex gap-3">
                {/* {cardData.map((card, index) => (
                  <TestCard
                    key={index}
                    title={card.title}
                    price={card.price}
                    inv={card.inv}
                    description={card.description}
                  />
                ))} */}

                <div className="tsts tst-1">
                  <h6>AMMONIA</h6>
                  <h3>Rs 450/-</h3>
                  <hr />
                  <p className="para">INVCODE : INV1663</p>

                  <hr />
                  <button className="btn">Book Now</button>
                </div>
                <div className="tsts tst-2">
                  <h6>IHC ER/PR/HER2nu(BREAST PANEL) </h6>
                  <h3>Rs 4000/-</h3>
                  <hr />
                  <p className="para">INVCODE : INV1441</p>

                  <hr />
                  <button className="btn">Book Now</button>
                </div>
                <div className="tsts tst-2">
                  <h6>IHC ER/PR/HER2nu(Breast panel) + Ki-67</h6>
                  <h3>Rs 5000/-</h3>
                  <hr />
                  <p className="para">INVCODE : INV2408</p>

                  <hr />
                  <button className="btn">Book Now</button>
                </div>
                <div className="tsts tst-2">
                  <h6>10X300 SWAB C/S</h6>
                  <h3>Rs 3000/-</h3>
                  <hr />
                  <p className="para">INVCODE : INV2</p>

                  <hr />
                  <button className="btn ">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tests;

const Wrapper = styled.section`
  .banner-cnt {
    h2 {
      font-weight: 600;
      color: #005bab;
      font-size: 2rem;
    }
    p {
      font-size: 15px;
      color: #fff;
      span {
        color: #00203c;
        font-family: inherit;
      }
    }
  }
  .banner-bg {
    height: 15em;
    align-items: center;
    background: linear-gradient(
        0deg,
        rgba(0, 32, 60, 0),
        rgba(0, 174, 239, 0.3)
      ),
      url("https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?w=740&t=st=1687859208~exp=1687859808~hmac=491da7442440e03cf55afa8972abd0012801bee4edec64a85a3e75919e4ba541");
    background-size: cover;
    background-position: bottom center;
  }

  /* ---------------test cards */
  .tsts {
    /* background-color: #00203c; */
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: #00203c;
    border-radius: 15px;
    padding: 2rem;

    width: 48%;
    h3 {
      font-size: 1.5rem;
      color: #005bab;
      font-weight: 600;
    }
    h6 {
      font-size: 1rem;
      color: #00203c;
      /* font-weight: 600; */
    }
    p {
      color: #00203c;
      /* font-size: 0.9rem;
      font-weight: 500; */
    }
  }
  .tst-group {
    flex-wrap: wrap;
    padding-top: 1rem;
  }
  .btn {
    color: #fff;
    font-size: 0.8rem;
    width: 6rem;
    background-color: #005bab;
    justify-content: flex-end;
  }
  .para {
    color: #bebebe;
  }
  .btn {
    float: right;
  }

  /* ---------------test cards */

  .tests-comp {
    overflow: hidden;
  }
  .container {
    color: #fff;
    padding: 50px 0;
  }
  .tests-container {
    /* background-color: antiquewhite; */
    margin: 3rem auto;
    padding: 0;
    border-radius: 15px;
    gap: 0.5rem;
  }
  .tests-container a {
    size: 1rem;
    text-decoration: none;
    color: #00203c;
    display: flex;
    margin-top: 0.5rem;
  }
  .box-mb {
    margin-bottom: 1.5rem;
  }
  /* ---------------Categories */

  a.active {
    color: #005bab;
    font-weight: 600;
  }
  .active {
    color: red;
    position: relative;
  }
  .active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 25%;
    background-color: #005bab;
  }
  .h4-style {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: #005bab;
  }

  .box-left {
    width: 45%;
    height: 100%;
    background-color: #00aeef05;
    border-radius: 15px;
    padding: 2rem;
    /* border: 1px solid #005bab; */
    background: linear-gradient(
      180deg,
      rgba(0, 174, 239, 0.2),
      rgba(0, 91, 171, 0)
    );
  }

  .box-right {
    gap: 10;
    border-radius: 15px;
    padding: 0 1.5rem;
  }

  .box-right-top {
    padding: 1.5rem;
    background: linear-gradient(
      0deg,
      rgba(0, 91, 171, 0),
      rgba(0, 174, 239, 0.2)
    );
    border-radius: 15px;
  }
`;
