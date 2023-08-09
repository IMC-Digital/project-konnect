import React, { useState } from "react";
import { styled } from "styled-components";
import { BsFilter, BsSearch } from "react-icons/bs";
import { organImages } from "../../assets/data/AllData";
import { TestCard } from "../requiredPages/TestCard";
import { testsData } from "../../assets/data/AllData";
import OrganCarousel from "../requiredPages/OrganCarousel";
import AtoZ from "../requiredPages/AtoZ";

const blogs = [
  { id: 1, title: "" },
  // Add more blog objects as needed
];

const ToggleKT = ({handleClick}) => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <div className="s2-kt ">
        <div className="kt-searchBox mb-4 d-flex">
          <div className="filterBy d-flex gap-3" style={{ width: "25%" }}>
            <BsFilter />
            <select className="filter">
              <option>Filter by Category</option>
              <option>Test Category one</option>
              <option>Test Category one</option>
              <option>Test Category one</option>
            </select>
          </div>
          <div className="searchBar d-flex flex-fill" style={{ width: "100%" }}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search A-Z / Search by Organ"
            />
            <BsSearch />
          </div>
        </div>
        <div className="selectionBox d-flex gap-2 mb-4">
          <div className="a-zBox" style={{ width: "40%" }}>
            <div className="kt-a-z d-flex flex-wrap">
              <AtoZ blogs={blogs} />
            </div>
          </div>
          <div className="organsBox">
            <div className="kt-organs d-flex">
              <OrganCarousel images={organImages} />
            </div>
          </div>
        </div>
        <div className="results d-flex flex-wrap gap-3 justify-content-center">
          {testsData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .slice(0, 6)
            .map((item, index) => (
              <TestCard
                key={index}
                title={item.title}
                price={item.price}
                inv={item.inv}
                item={item}
                handleClick={handleClick}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ToggleKT;
const Wrapper = styled.section`
  .s2-kt {
    /* background-color: grey; */
    .kt-searchBox {
      /* background-color: rebeccapurple; */
      gap: 25px;

      .filterBy {
        align-items: center;

        select {
          color: ${({ theme }) => theme.colors.primary};
          border: none;
          &:focus {
            outline-style: none;
          }
        }
        svg {
          fill: ${({ theme }) => theme.colors.primary};
          width: 25px;
          height: 25px;
        }
      }
      .searchBar {
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 2px 10px;
        align-items: center;
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
    }
  }

  /* ---------------------- */

  .selectionBox {
    .kt-organs {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .carousel-root {
      .carousel .slider {
        padding: 0;
      }
    }
  }
`;
