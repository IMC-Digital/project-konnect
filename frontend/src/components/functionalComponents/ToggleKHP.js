import React, { useState } from "react";
import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
import HpCard from "../requiredPages/HpCard";

import { packagesData } from "../../assets/data/AllData";

const ToggleKHP = () => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <div className="s2-khp">
        <div className="khp-searchBox d-flex mb-4">
          <div className="searchBar d-flex flex-fill">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search with package name"
            />
            <BsSearch />
          </div>
        </div>
        <div className="results d-flex flex-wrap gap-3 justify-content-center">
          {packagesData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .slice(0, 6)
            .map((item, index) => (
              <HpCard
                key={index}
                image={item.ftrImg}
                title={item.title}
                price={item.price}
                code={item.code}
                desc={item.desc}
                info={item.temInfo}
                item={item}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ToggleKHP;
const Wrapper = styled.section`
  .searchBar {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2px 10px;
    align-items: center;
    justify-content: center;
    input {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      font-size: 15px;
      padding: 5px 25px;
      width: 100%;
      &:focus {
        outline-style: none;
      }
    }

    svg {
      width: 10%;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
