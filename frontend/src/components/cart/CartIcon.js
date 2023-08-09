import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartIcon = ({ size }) => {
  return (
    <Wrapper>
      <div className="cart-icon">
        <FaShoppingCart className="cart-icon" />
        <span className="item-count">{size}</span>
        {/* <span>{size}</span> */}
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
    background-color: ${({ theme }) => theme.colors.secondary};
    /* padding: 5px; */
    border-radius: 50%;
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
