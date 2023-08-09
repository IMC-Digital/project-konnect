import React from "react";
import { Carousel } from "react-responsive-carousel";
import { styled } from "styled-components";

const OrganCarousel = ({ images }) => {
  return (
    <Wrapper>
      <Carousel
        style={{ width: "100%" }}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        centerMode
        centerSlidePercentage={1}
        selectedItem={0}
      >
        <div className="organs d-flex gap-3 flex-wrap ">
          {images.map((image, index) => (
            <div className="org-item" key={index}>
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default OrganCarousel;

const Wrapper = styled.section`
  .dot.selected {
    background-color: #005bab;
    cursor: progress;
  }
  .carousel-root {
    /* width: 100%; */

    .carousel {
      height: auto;
    }
    .carousel .slider {
      margin: 0 25px;
    }
  }
  .organs {
    .org-item {
      &:hover {
        background-color: #005bab10;
      }
      &:hover p {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    img {
      width: 50px;
      margin: 10px;
    }
  }
`;
