import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
// import { testsData } from "../data/AllData";

export const TestCard = (props) => {
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  // for (let i = 0; i < testsData.length; i--)
  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <div className="tstsCard w-100">
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>

          <div className="w-100">
            <h5 className="tstTitle">{props.title}</h5>
            <p className="tstInv">
              INVCODE:<b> {props.inv} </b>
            </p>
          </div>

          <div className="d-flex w-100 justify-content-between align-items-center border-top pt-3">
            <h6 className="mb-0 tstPrice">RS {props.price}</h6>
            <button
              className="tstCardBtn btn"
              onClick={() => {
                addItem(props.item);
                changeText("Added to Cart");
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tstCards {
    flex-wrap: wrap;
    text-align: left;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: 4px;
    padding: 2rem;
    width: 22rem;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0 4px 0 32px;
  }
  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
  .tstCards:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -26px;
    right: -26px;
    background: ${({ theme }) => theme.colors.primary};
    height: 52px;
    width: 52px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }
  .tstCards:hover:before {
    transform: scale(21);
  }
  .tstCards:hover {
    &:hover .tstPrice {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover .tstCardBtn {
      color: ${({ theme }) => theme.colors.txt};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .tstsCard {
    /* width: 100; */
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tstCardBtn {
      font-weight: 600;
      font-size: 1rem;
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: $color; */
        border-radius: 10rem;
        /* z-index: 2; */
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.3s;
        border-radius: 5px;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        z-index: 1;
        &:before {
          width: 100%;
        }
      }
    }
    .tstTitle {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.6reem;
    }
    .tstInv {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 0.8rem;
    }
    .tstPrice {
      color: #00203c;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }

  .tstCardBtn {
    color: #005bab;
    font-size: 0.8rem;
    border: 1px solid #005bab;
    justify-content: flex-end;
  }
  .txtcartBtn:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  .para {
    color: #fff;
  }

  .tstCards:hover .tstTitle,
  .tstCards:hover .tstInv {
    color: white;
  }
`;
