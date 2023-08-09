import React from "react";
import styled from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";

const SectionThree = () => {
  return (
    <Wrapper>
      <div className="s3-full">
        <div className="services">
          <div className="container d-flex justify-content-between">
            <div className="s3-s service1">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/location.svg"} />
              </div>
              <h5>Nearest Center</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Lab.svg"} />
              </div>
              <h5>Booka a test</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/house.svg"} />
              </div>
              <h5>Home Collections</h5>
            </div>
            <div className="s3-s service3">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Prescription.svg"} />
              </div>
              <h5>Upload Prescription</h5>
            </div>
            <div className="s3-s service4">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/download-report.svg"} />
              </div>
              <h5>Download Report</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="secThree container d-flex">
        <div className="secThree-img">
          <DynamicImage className="secThree-imgLeft" imageName={"img1.jpg"} />
        </div>

        <div className="secThree-info d-flex">
          <div className="sti secThree-info-one d-flex">
            <DynamicImage
              className="secThree-info-icon"
              imageName={"/icons/box.svg"}
            />
            <p>Guaranteed time slots</p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/Prescription.svg"} />

            <p>Temperature control sample movement and tracking </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/box.svg"} />
            <p>Personalised sample Collection </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/Prescription.svg"} />
            <p>Check our health packages </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.section`
  .services {
    background-color: ${({ theme }) => theme.colors.primary};

    padding: 4rem 0 15rem 0;
  }
  .secThree {
    margin-top: -12rem;
  }
  .s3-s {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .s3-icons {
      background-color: #fff;
      border-radius: 100px;

      padding: 1.5rem;
      height: 100px;
      width: 100px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    }
    h5 {
      color: #fff;
      font-size: 1.125rem;
    }
    &:hover .s3-icons {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    &:hover img {
      scale: 1.2;
    }
  }
`;
