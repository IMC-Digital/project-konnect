import React, { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Wrapper>
      <section className="login">
        <div className="container box">
          <div className="login-box">
            <h3>Login</h3>

            <form className="form" onSubmit={submitHandler}>
              <span>Username or email address *</span>
              <input
                type="text"
                name={username}
                required
                onChange={changehandler}
              />
              <span>Password *</span>
              <input
                type="password"
                name={password}
                required
                onChange={changehandler}
              />
              <button className="btn button" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .login {
    background-image: url("https://img.freepik.com/premium-vector/blue-background-with-abstract-pattern_573652-1365.jpg?w=900");
    background-size: cover;
    background-repeat: no-repeat;

    .box {
      padding: 50px 0;
      .login-box {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h3 {
          color: ${({ theme }) => theme.colors.white};
          font-family: "Montserrat Alternates", sans-serif;
        }
        .form {
          background-image: url("/project-konnect/images/k-10.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-color: white;
          display: flex;
          flex-direction: column;
          padding: 50px;
          border-radius: 15px;
          width: 40%;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          input {
            border-radius: 5px;
            border: none;
            height: 35px;
            background-color: ${({ theme }) => theme.colors.primary90};
          }
          span {
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin: 15px 0 5px;
          }
          button {
            border: none;
            align-items: center;
            margin-top: 25px;
            width: 100px;
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;
