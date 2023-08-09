import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";
import HeroSection from "./HeroSection";

const HeroSlider = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <Slider
        ref={Fac_carousel_slider}
        {...sliderSettings}
        className="s-slider"
      >
        <div className="hero-bg-img">
          <DynamicImage imageName={"bannerImage.jpg"} />
        </div>
        <div className="hero-bg-img d-flex bg-2">
          <HeroSection />
        </div>
      </Slider>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.section`
  .bg-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .s-slider {
    z-index: 0;
    /* margin: 50px; */
    position: relative;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .slick-arrow {
    &::before {
      /* font-family: inherit; */
      font-size: 32px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary90};
    }
  }

  .slick-prev {
    top: 50%;
    left: 3%;
    z-index: 100;
  }
  .slick-next {
    top: 50%;
    right: 3%;
    color: black;
    &::before {
    }
  }
  .hero-bg-img {
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .slick-dots {
    bottom: 5%;
    .slick-active {
      background-color: ${({ theme }) => theme.colors.primary90};
    }
    li {
      background-color: #cfcfcf;
      border-radius: 50px;
      &::before {
        background-color: red;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
