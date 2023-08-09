import React, { useState } from "react";
import { styled } from "styled-components";

import ToggleKT from "../functionalComponents/ToggleKT";
import ToggleKHP from "../functionalComponents/ToggleKHP";
import ToggleKLT from "../functionalComponents/ToggleKLT";
import ToggleKL from "../functionalComponents/ToggleKL";

const SectionTwo = () => {
  const [activeComponent, setActiveComponent] = useState("ToggleKT");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <Wrapper>
      <div className="s2 ">
        <div className="top-bar container">
          {/* <div className="boxes d-flex gap-5">
            <div className="box d-flex">
              <img
                src="/project-konnect/images/icons/download-report.svg"
                alt=""
              />
              <div className="box-info">
                <h5>dfgsdfg</h5>
                <h6>sdfasdf</h6>
              </div>
            </div>
            <div className="box d-flex">
              <img
                src="/project-konnect/images/icons/Prescription.svg"
                alt=""
              />
              <div className="box-info">
                <h5>dfgsdfg</h5>
                <h6>sdfasdf</h6>
              </div>
            </div>
            <div className="box d-flex">
              <img src="/project-konnect/images/icons/Heart.svg" alt="" />
              <div className="box-info">
                <h5>dfgsdfg</h5>
                <h6>sdfasdf</h6>
              </div>
            </div>
            <div className="box d-flex">
              <img src="/project-konnect/images/icons/Heart.svg" alt="" />
              <div className="box-info">
                <h5>dfgsdfg</h5>
                <h6>sdfasdf</h6>
              </div>
            </div>
            <div className="box d-flex">
              <img src="/project-konnect/images/icons/Heart.svg" alt="" />
              <div className="box-info">
                <h5>dfgsdfg</h5>
                <h6>sdfasdf</h6>
              </div>
            </div>
          </div> */}
        </div>

        <div className="s2-tests-box">
          <div className="s2-container container">
            <div className="d-flex gap-3 justify-content-between">
              <button
                className="k-btn btn-kt"
                onClick={() => handleButtonClick("ToggleKT")}
              >
                Konnect Tests
              </button>
              <button
                className="k-btn"
                onClick={() => handleButtonClick("ToggleKHP")}
              >
                Konnect Health Packages
              </button>
              <button
                className="k-btn"
                onClick={() => handleButtonClick("ToggleKLT")}
              >
                Konnect Life Tests
              </button>
              <button
                className="k-btn"
                onClick={() => handleButtonClick("ToggleKL")}
              >
                Konnect Locations
              </button>
            </div>
          </div>
        </div>
        <div
          className="s2-tests-container container"
          style={{
            background: `url("/project-konnect/images/k-10.png")`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            padding: "25px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 25px 0px",
            borderRadius: "0 0 1rem 1rem",
          }}
        >
          <div className="s2-selection-box d-flex gap-2">
            {activeComponent === "ToggleKT" && <ToggleKT />}
            {activeComponent === "ToggleKHP" && <ToggleKHP />}
            {activeComponent === "ToggleKLT" && <ToggleKLT />}
            {activeComponent === "ToggleKL" && <ToggleKL />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.section`
  .s2 {
    margin-bottom: 100px;
    .s2-top {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      margin: auto;
      text-align: center;
      vertical-align: middle;
      width: 20vw;
      height: 50px;
      border-radius: 50px 50px 0 0;
      padding: 0;
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        padding-top: 15px;
        position: relative;
        /* &::after {
        content: "";
        position: absolute;
        background-color: #fff;
        left: 0px;
        border-radius: 2px;
        margin: auto 0px;
        bottom: 0;
        width: 100px;
        height: 3px;
      } */
      }
    }
  }

  .s2-tests-box {
    font-weight: 500;
    background: ${({ theme }) => theme.colors.primary};
  }
  .k-btn {
    background-color: ${({ theme }) => theme.colors.white};
    margin: 25px 0;
    border: 0;
    width: 300px;
    padding: 10px 32px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
