import React from "react";
import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";

const SectionFour = ({handleClick}) => {
  return (
    <Wrapper>
      <div className="secFour container ">
        <div className="secFour-info d-flex">
          <h2>Popular Tests</h2>
          <p className="w1000">
            Explore Konnect's popular diagnostic tests to gain valuable insights
            into your health, cognition, and overall well-being. Take charge of
            your health journey now.
          </p>
        </div>
        <div className="cards d-flex">
          <MyCarousel handleClick={handleClick}  />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;
const Wrapper = styled.section`
  .secFour-info {
    margin-bottom: 25px;
    p {
      width: 1000px;
    }
  }
  .secFour {
    margin: 5rem auto;
  }
  .secFour-info {
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
