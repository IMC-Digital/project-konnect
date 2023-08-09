import React from "react";
import { styled } from "styled-components";
// import imageee from "../../assets/images/fetal-medicine-care/halloween-background.jpg";
import FacilitiesCarousel from "../../components/requiredPages/FacilitiesCarousel";

const Li = ({prop}) => {
  return(
    <li>
      <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g><path d="m11.982 14.982c-.265 0-.52-.105-.707-.293l-2.982-2.982c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.275 2.275 7.293-7.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-8 8c-.188.188-.442.293-.707.293z" fill="#d66ea6 "/></g><g><path d="m12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c1.193 0 2.342.257 3.414.763.499.236.713.832.477 1.331-.236.5-.832.715-1.332.478-.802-.38-1.663-.572-2.559-.572-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-.553.448-1 1-1s1 .447 1 1c0 4.411-3.589 8-8 8z" fill="#d66ea6 "/></g></g></svg>
      <span className="ms-2"> {prop}  </span> 
    </li>
  )
}

const FetalMedicineUnit = () => {
  return (
    <Wrapper className="partnerwithus">
      <section className="section" id="fmu_s1">
        <img src="/project-konnect/images/dotGrids1.png" alt="" className="dots" />
        <div className="container mx-auto row d-flex align-items-stretch">
          <div
            className="col-6 p-5 d-flex flex-column justify-content-center"
            id="fmu_s11"
          >
            <div>
              <span className="spl_text"> Fetal Medicine Unit </span>
            </div>
            <div className="my-2">
              <h1 className="">
              Center for Fetal Medicine, that provides mother and fetus care
              </h1>
            </div>
            <div className="">
              <p className="">
                By assessing the fetal growth, its wellbeing, diagnosis and management of fetal disorders and abnormalities which counsels parents to take care of their child in prior.
              </p>
            </div>
          </div>

          <div className="col-6 d-flex align-items-stretch" id="fmu_s12">
            <div className="w-50" id="fmu_s121">
            </div>
            <div className="w-50 ">
              <div className="w-100 ">
                <img
                  src="/project-konnect/images/fetal-medicine-care/halloween-background.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 ">
                <img
                  src="/project-konnect/images/fetal-medicine-care/ultrasonography-picture.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="section" id="fmu_s2">
        <div className="w-100">
          <div className="container mx-auto d-flex">
              <div className="d-flex justify-content-center w-50 p-4 flex-column">
                  <div className="">
                      <h2 className="mb-3">
                          About Us
                      </h2>
                      <p className="">
                        Over a decade, many diagnostic systems are striving to go through a quality process in Fetal Health Diagnosis. Considering the importance and value of fetal health and care, Konnect Diagnostics is a step ahead of all its competitors in market to provide the best fetal diagnosis and guide the mother by suggesting relevant and superior treatment to forbid the future health issues of the fetus. Konnect diagnostics is at the reach to offer a complete and detailed Fetal imaging and diagnosis with a high expertise team and well equipped facility which is comfortable and affordable. We care and let you know how to take care. 
                      </p>
                  </div>
                  <div className="">
                    <div className="d-flex s2_is">
                      <div>
                        <div className="mv_icon_cont">
                            <img src="/project-konnect/images/fetal-medicine-care/vision.svg" alt="" className="mv_icon" />
                        </div>
                      </div>
                      <div>
                          <h2>Vision: </h2>
                          <p>Our Vision is to serve the superior quality diagnostic care with utmost commitment and dedication to know your health.</p>
                      </div>
                    </div>
                    <div className="d-flex s2_is">
                      <div>
                        <div className="mv_icon_cont">
                            <img src="/project-konnect/images/fetal-medicine-care/mission.svg" alt="" className="mv_icon" />
                        </div>
                      </div>
                      <div>
                          <h2>Mission: </h2>
                          <p>Konnect Diagnostics is equipped with a mission of providing a wide range of diagnostic services to the wellness of our patients in a cost-effective and accessible method. We strive to know you better. </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img style={{width: "75%"}} src="/project-konnect/images/fetal-medicine-care/fmu_s2_sideImg.png" alt="" />
              </div>
          </div> 

          <div className="container d-flex">
            <div className="w-50 d-flex justify-content-end align-items-center">
              <img style={{width: "500px", height: "auto", borderRadius: "10px"}} src="https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?w=996&t=st=1690875027~exp=1690875627~hmac=1aa5118d64968b377330e40d707d0439093f3c5c17306731000934b7bb1629b6" alt="" />
            </div>
            <div>
              <img 
                src="/project-konnect/images/fetal-medicine-care/konnect_whyUs_ill.png" 
                alt="" 
                style={{width: "450px", marginLeft: "-85px"}}
              />
            </div>
          </div>
          
        </div>
      </section>

      <section className="section d-flex flex-column pb-5" id="fmu_s4">
        <div className="flex-column w-50 mx-auto p-5" id="fmu_s41">
          <div className="text-center">
            <span className="spl_text">Promising best quality Services</span>
            <h2> OUR SERVICES </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Praesentium, unde pariatur. Dicta nobis quos laudantium.
            </p>
          </div>
        </div>

        <div className="w-75 mx-auto" id="fmu_s42">
          <div className="d-flex">
            <div className="w-50 img_wrapper" 
              style={{
                minHeight: "200px",
                background:"url('/project-konnect/images/fetal-medicine-care/fetalImaging.jpg')",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderRight: "5px solid #d66ea6"
              }}> </div>
            <div className="w-50 p-4 ps-5 d-flex flex-column justify-content-center content_wrapper">
              <h4 className=""> FETAL IMAGING </h4>
              <ul>
                <Li prop={"Early pregnancy scan/dating scan - 3D/4D"}/>
                <Li prop={"Early TIFFA / NT - 3D/4D"}/>
                <Li prop={"TIFFA / Anomaly scan - 3D/4D"}/>
                <Li prop={"Fetal Echocardiogram - 3D/4D"}/>
                <Li prop={"Fetal neuro imaging"}/>
                <Li prop={"Fetal Doppler"}/>
                <Li prop={"Growth scans"}/>
                <Li prop={"BPP"}/>
                <Li prop={"Fetal MRI"}/>
              </ul>
            </div>
          </div>

          <div className="d-flex">
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className=""> IMAGING IN FERTILITY </h4>
              <ul>
                <Li prop={"Follicular monitoring"}/>
                <Li prop={"Antral follicular study"}/>
                <Li prop={"Stromal volume in PCOS"}/>
                <Li prop={"Endometrial and perifollicular doppler"}/>
                <Li prop={"3D imaging of uterus"}/>
                <Li prop={"Sono-salpingography"}/>
                <Li prop={"Penile doppler"}/>
                <Li prop={"Scrotal imaging"}/>
                <Li prop={"Trans rectal USG for seminal vesicles"}/>
                <Li prop={"Prostate and ejaculatory ducts"}/>
              </ul>
            </div>
            <div className="w-50 img_wrapper"
              style={{
                minHeight: "200px",
                background:"url('/project-konnect/images/fetal-medicine-care/imagingInFertility.jpg')",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderLeft: "5px solid #d66ea6"
              }}
            > </div>
          </div>

          <div className="d-flex">
            <div className="w-50 img_wrapper" 
              style={{
                minHeight: "300px",
                background:"url('/project-konnect/images/fetal-medicine-care/maternal.jpg')",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderRight: "5px solid #d66ea6"
              }}> </div>
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className=""> FETAL & MATERNAL  </h4>
              <ul>
                <Li prop={"INTERVENTIONS"}/>
                <Li prop={"CVS"}/>
                <Li prop={"Amniocentesis"}/>
                <Li prop={"Fetal reduction"}/>
                <Li prop={"Maternal abdominal paracentesis/adnexal"}/>
                <Li prop={"Cyst aspiration"}/>
              </ul>
            </div>
          </div>

          <div className="d-flex">
            <div className="w-50 p-4 d-flex flex-column justify-content-center content_wrapper">
              <h4 className=""> GENETICS </h4>
              <ul>
                <Li prop={"Genetic counselling"}/>
                <Li prop={"Blood investigations"}/>
              </ul>
            </div>
            <div className="w-50 img_wrapper"
              style={{
                minHeight: "350px",
                background:"url('/project-konnect/images/fetal-medicine-care/genetics.jpg')",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderLeft: "5px solid #d66ea6"
              }}
            > </div>
          </div>
 
        </div>
      </section>

      <section id="fmu_s5">
        <div className="container p-5">
          <h2 className="text-center"> KONNECT FACILITIES </h2>
          <div>
            <FacilitiesCarousel />
          </div>
        </div>
      </section>

      
    </Wrapper>
  );
};

export default FetalMedicineUnit;

const Wrapper = styled.section`
  #fmu_s1 {
    background: url("/project-konnect/images/bannerBG.png");
    background-position: right top;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    padding: 50px 0;
    #fmu_s11 {
      h2.r_heading_title:after {
        content: url("/project-konnect/images/reaction_svg.svg");
        z-index: -1;
        margin-left: 30px;
      }
    }
    #fmu_s12 {
      position: relative;
      z-index: 0;
      #fmu_s121 {
        background: url("/project-konnect/images/fetal-medicine-care/ultrasound-consultation.jpg");
        background-position: right top;
        background-size: cover;
        background-repeat: no-repeat;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
      }
      div {
        margin: 0 5px;
        div {
          margin: 5px 0;
        }
      }
    }
    #fmu_s12 img {
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      width: 100%;
    }
    img.dots {
      position: absolute;
      left: -100px;
      top: 50px;
    }
    #fmu_s12:before {
      content: "";
      position: absolute;
      bottom: -30px;
      left: -30px;
      width: 150px;
      height: 150px;
      background: url("/project-konnect/images/dotGrids1.png");
      z-index: -1;
    }
  }

  #fmu_s2 {
    background: #f8f8f9;
    padding: 50px 0 50px 0;
    #pwu_s22 .row {
      .card_img_container {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 auto;
        border: 2px solid #e6e6e6;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
      }
      .img_steth {
        position: absolute;
        top: -15px;
        left: -15px;
      }
    }
    .s2_is{
      margin-top: 15px;
      .mv_icon_cont{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        display: grid;
        place-items: center;
        margin-right: 30px;
        img{
          width: 50px;
        }
      }
      h2{
        font-size: 18px;
        font-weight: 700;
      }
    } 
  }

  #fmu_s3{
    background: ${({ theme }) => theme.colors.primary};
    .sec_heading{
      color: white;
    }
    h6{
      color: white;
      margin: 15px;
    }
    .s3_ic{
      width: 80px;
      height: 80px;
      padding: 10px;
      background: white;
      border-radius: 40px;
      display: grid;
      place-items: center;
      img{
        width: 40px;
      }
    }
  }

  #fmu_s4{
    .sub_heading{
      font-size: 18px;
      font-weight: 700;
    }
    img{
      border-radius: 10px;
    }
    ul{
      list-style-type: none;
      padding: 0;
      li{
        display: inline-block;
        padding: 5px 15px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px;
        background: white;
        margin: 2px;
        border-radius: 3px;
        border-bottom: 3px solid rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  #fmu_s5{
    background: ${({ theme }) => theme.colors.bg_light};
  }
  
  /*def */
  .spl_text{
    font-size: 18px;
    font-weight: 700;
    color: #d66ea6;
  }
.section{
  display: flex;
  width: 100%;
  position: relative;
}
`;
