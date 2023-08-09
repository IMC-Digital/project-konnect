import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { MdDelete, MdCurrencyRupee } from "react-icons/md";
// import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const Cart = ({ handleChange }) => {
  const [showComponent, setShowComponent] = useState(false);

  function handleSubmit() {
    setShowComponent(true);
  }

  const {
    isEmpty,
    // totalUniqueItems,
    items,
    // totalItems,
    cartTotal,
    // updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div
        className="empty container d-flex flex-column"
        style={{
          backgroundImage: 'url("/project-konnect/images/k-10.png")',
          backgroundSize: "500px",
          backgroundPositionX: "center center",
          backgroundRepeat: "no-repeat",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 25px 0px",
          margin: " 50px auto",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "60vh",
        }}
      >
        <h2
          className="text-center"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Your Cart is Empty
        </h2>
        <p className="m-3">Add Tests or Packages</p>
      </div>
    );
  return (
    <Wrapper className="py-4 container">
      <h5>{/* Cart ({totalUniqueItems}) totalItems:({totalItems}) */}</h5>
      <div className="cart-container gap-4">
        <div className="cart-left">
          <div className="tests">
            {items.map((item, index) => {
              return (
                <div
                  className="tests-box d-flex justify-content-between mb-3"
                  key={index}
                >
                  <div className="name d-flex gap-3 justify-content-between align-items-center">
                    <h3 className="title">{item.title}</h3>
                    <h3 className="price d-flex">
                      <MdCurrencyRupee />
                      {item.price}
                    </h3>
                  </div>
                  <div className="quantity d-flex  gap-2">
                    {/* <HiPlusSm
                      // onClick={() => updateItemQuantity(item.id, item.quantity + 1) }
                      onClick={()=>handleChange(item, +1)}
                    />
                    <h5>{item.quantity}</h5>

                    <HiMinusSm
                      // onClick={() => updateItemQuantity(item.id, item.quantity - 1) }
                      onClick={()=>handleChange(item, -1)}
                    /> */}
                  </div>

                  <MdDelete
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              );
            })}

            <div className="cart-bottom d-flex justify-content-between">
              <button
                className="btn btn-clear-cart m-2"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>
              <div className="proceed-box d-flex gap-4">
                <h3>
                  Total Price : <MdCurrencyRupee />
                  {cartTotal}
                </h3>
                <button className="btn" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
            {showComponent && (
              <div className="bookNow">
                <form className="form" submit="true">
                  <input type="text" placeholder="Enter Your Name" />
                  <input type="number" placeholder="Your Phone Number" />
                  <input type="text" placeholder="Your Email" />
                  <button className="btn" type="submit">
                    Book Test's
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.section`
  .cart-left {
    width: 100%;

    .tests {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 50px;
      border-radius: 10px;
      .tests-box {
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: 1rem;
        border-radius: 5px;
        align-items: center;
        .name {
          width: 100%;
          .title,
          .price {
            color: ${({ theme }) => theme.colors.white};
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0;
          }
          .price {
            align-items: center;
            margin-right: 25px;
            svg {
              fill: ${({ theme }) => theme.colors.white};
            }
          }
        }
        .quantity {
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 2rem;

          svg {
            fill: ${({ theme }) => theme.colors.white};
            cursor: pointer;
            &:hover {
              fill: ${({ theme }) => theme.colors.white};
            }
          }

          h5 {
            border-radius: 50px;
            /* padding: 10px; */
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0;
            font-size: 1rem;
            border: 2px solid ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.white};
          }
        }
        svg.remove {
          fill: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          transition: all 0.3s;
          &:hover {
            scale: 1.3;
            cursor: pointer;
          }
        }
      }
      .cart-bottom {
        align-items: center;
        .proceed-box {
          align-items: center;
          h3 {
            color: ${({ theme }) => theme.colors.text};
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0;
            svg {
              fill: ${({ theme }) => theme.colors.text};
            }
          }
          .btn {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
      .bookNow {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 10px;
        margin-top: 2rem;
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 50px;
          input {
            width: 100%;
            border-radius: 5px;
            padding: 10px;
            gap: 10px;
            border: none;
            background-color: ${({ theme }) => theme.colors.white};
            &::placeholder {
              color: #d1d1d1;
              font-size: 15px;
              padding: 10px;
            }
          }
          .btn {
            background-color: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
  /* .cart-right {
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 35%;
    padding: 25px;
    border-radius: 10px;
    .proceed-box {
      h3 {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  } */

  .btn-clear-cart {
    background-color: red;
    color: ${({ theme }) => theme.colors.white};
  }
`;
