import React from "react";
import { styled } from "styled-components";

const AtoZ = ({ blogs }) => {
  const sortedBlogs = [...blogs].sort((a, b) => a.title.localeCompare(b.title));

  const generateAlphabet = () => {
    const alphabet = [];
    for (let i = 65; i <= 90; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
  };

  return (
    <Wrapper>
      <ul className="d-flex flex-wrap">
        {generateAlphabet().map((letter) => (
          <li key={letter}>
            <h3>{letter}</h3>
            <ul style={{ textDecoration: "none" }}>
              {sortedBlogs.map((blog) => {
                if (blog.title.charAt(0).toUpperCase() === letter) {
                  return <li key={blog.id}>{blog.title}</li>;
                }
                return null;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default AtoZ;

const Wrapper = styled.section`
  ul {
    padding: 0;
    margin: 0;
    li {
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px;
      list-style: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      width: 32px;
      height: 32px;
      margin: 5px;
      border-radius: 5px;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
