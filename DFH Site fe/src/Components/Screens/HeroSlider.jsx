import React from "react";
import { Carousel, Button } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import heroImage from "../../assets/dfh.jpeg";
import successIcon from "../../assets/backdrop.jpg";

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3fafa;
  padding: 50px;
  margin-top: 100px;
  column-gap: 10%;
  transition: all 0.3s ease-in-out;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
    column-gap: 0;
    width: 100%;
  }
`;

const Content = styled(motion.div)`
  max-width: 600px;

  h1 {
    font-size: 58px;
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
    transition: transform 0.3s ease-in-out;

    span {
      color: #e63950;
    }

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    font-size: 18px;
    color: #333;
    margin: 20px 0;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const CallButton = styled(Button)`
  background: linear-gradient(135deg, #e63950, #ff6b81);
  color: #fff;
  padding: 20px 28px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 4px 10px rgba(230, 57, 80, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background: linear-gradient(135deg, #ff6b81, #e63950);
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(230, 57, 80, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 24px 24px;
  }
`;

const Icon = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 100%;
  overflow: hidden; // Prevents images from exceeding the container
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SuccessBadge = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: -50px;
  background: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  ${ImageContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden; // Prevents horizontal scroll issues

  .slick-track {
    display: flex;
  }
`;

const HeroSlider = () => {
  const slides = [
    {
      title: "Lighthouse",
      description:
        "We are a bunch of people from different walks of life used by God to love and care for people with the heart and mind of Christ. Our desire is that we would all together be instrumental in helping and supporting each other to be edified/transformed in our heart, mind, spirit and to transform the community around us to make this world a better place! Feel free to explore the other pages of this website, join us at our meetings and pray for us fervently on a regular basis."
        
      },
    // {
    //   title: "Unlock <span>Potential</span> with <span>Right Guidance</span>",
    //   description:
    //     "Career success starts with the right guidance. Take the first step towards a bright future today!",
    // },
    // {
    //   title: "Shape Your <span>Career</span> with <span>Confidence</span>",
    //   description:
    //     "Success begins with making the right choices. Let us help you pave the way to your dream career!",
    // },
  ];

  return (
    <SliderWrapper>
      <Carousel autoplay>
        {slides.map((slide, index) => (
          <div key={index}>
            <HeroSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Content>
                <motion.h1
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CallButton>
                    <Icon>📞</Icon> Schedule A Call
                  </CallButton>
                </motion.div> */}
              </Content>
              <ImageContainer
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Img src={heroImage} alt="Hero" />
                {/* <SuccessBadge>
                  <img
                    src={successIcon}
                    alt="Success"
                    width={"20px"}
                    height={"20px"}
                  />{" "}
                  100+ candidates
                </SuccessBadge> */}
              </ImageContainer>
            </HeroSection>
          </div>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default HeroSlider;
