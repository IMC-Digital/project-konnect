import React, { useState } from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <Wrapper>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>Eden Smith</h4>
                      <label>Los Angeles, CA</label>
                    </div>
                  </div>
                </Link>
                {/* <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Post</h4>
                  </button>
                </Link> */}
                <Link to="/login">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="box">
                    <BsBagCheck className="icon" />
                    <h4>My Order</h4>
                  </button>
                </Link>
                {/* <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wishlist</h4>
                </button> */}
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box">
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile {
    cursor: pointer;
    .image {
      display: flex;
      padding-bottom: 20px;
      img {
        margin-right: 20px;
        border: none;
      }
    }
    button {
      font-size: 1rem;
      padding: 0;
      border: none;
      background: none;
      font-weight: 500;
    }
  }
  .profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    &:focus {
      border: none;
    }
  }
  .openProfile {
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    position: absolute;
    padding: 20px;
    border-radius: 5px;
    top: 65px;
    right: 10px;
    width: 250px;
    background: #fff;
    z-index: 100;
    /* background-color: ${({ theme }) => theme.colors.primary90}; */
  }
  .openProfile .box {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    transition: 0.5s;
  }
  .openProfile .icon {
    font-size: 20px;
    margin-right: 20px;
  }
  .openProfile h4 {
    font-size: 15px;
    font-weight: 500;
  }
  .openProfile button:hover {
    background: rgba(0, 91, 171, 0.075);
  }
`;
