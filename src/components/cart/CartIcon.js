import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartIcon = ({ size }) => {
  return (
    <Wrapper>
      <div className="cart-icon">
        <FaShoppingCart className="cart-icon" />
        <h2 className="item-count">{size}</h2>
      </div>
    </Wrapper>
  );
};

export default CartIcon;
const Wrapper = styled.section`
  .cart-icon {
    position: relative;
    cursor: pointer;
  }

  .item-count {
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
