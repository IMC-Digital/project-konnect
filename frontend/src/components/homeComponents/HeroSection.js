import React from "react";
import { styled } from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper
    // style={{
    //   backgroundImage: `url("project-konnect/images/bannerImage.jpg")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <div className="hero-sec container d-flex p-0 py-5 justify-content-between">
        <div className="hero-content ">
          <h1 className="display-4 fw-bold ">
            Your
            <span className="span">partner</span>
            in <br />
            keeping you
            <span className="span">healthy</span>
          </h1>
          <div className="gyr my-4">
            Get Your
            <strong className="mx-2">Reports</strong>
            in<span className="mx-2">24</span>hours
          </div>
        </div>
        <div className="hero-video d-flex">
          <video autoPlay loop muted controls={false}>
            <source src="/project-konnect/images/hero24.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  .hero-content {
    /* height: 60vh; */
    align-self: center;
    /* justify-content: center; */
    .span {
      color: ${({ theme }) => theme.colors.secondary};
      margin: 0 1rem 0 1rem;
    }
    h1 {
      font-size: 4rem;
      text-transform: capitalize;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.primary};
    }
    .hero-packages {
      flex-wrap: wrap;
    }
  }

  .gyr {
    width: 24ch;
    border-right: 1px solid #005bab;
    overflow: hidden;
    white-space: nowrap;
    /* color: #00aeef; */
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};

    font-size: 1.3rem;
    line-height: 1.3;
    animation: typing 3s steps(18), blink 0.4s step-end infinite alternate;
    strong,
    span {
      color: #005bab;
      font-weight: 700;
    }
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }

  .cohp {
    background-color: #005bab;
    align-items: center;
    padding: 8px 28px;
    border-radius: 4px;
    .cohp-btn {
      color: #fff;
      font-size: 1rem;
      vertical-align: center;
      margin-bottom: 0;
    }
    img {
      width: 30px;
    }
  }
  .hero-sec {
    justify-content: space-between;
  }

  video {
    width: 25rem;
  }
`;
