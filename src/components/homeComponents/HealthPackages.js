import React from "react";
import HpCard from "../requiredPages/HpCard";
import { packagesData } from "../../assets/data/AllData";
import styled from "styled-components";

const HealthPackages = ({handleClick}) => {
  return (
    <Wrapper>
      <section className="r_section mb-5" id="hp_sec">
        <div>
          <div className="hp-info d-flex">
            <h2>Health Packages</h2>
            <p className="w1000">
              Konnect Diagnostic Centre: Empowering proactive health management
              through tailored Diagnostic Health Packages for early detection
              and prevention, promoting healthier lives.
            </p>
          </div>
          <div className="hp-box container flex-wrap">
            <div className="hpCards d-flex justify-content-center flex-wrap gap-3">
              {packagesData.slice(0, 3).map((item) => (
                <HpCard
                  key={item.code}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HealthPackages;

const Wrapper = styled.section`
  .hp-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top: 1.5rem;
  }

  #hp_sec {
    padding: 50px 0;
    background: ${({ theme }) => theme.colors.bg_light};
  }
  .hp-info {
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
