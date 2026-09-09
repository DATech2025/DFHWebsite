import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import heroImage from "../../assets/dfh.jpeg";

const AboutSlider = () => {
  const slides = [
    {
      title: "ABOUT US",
    }
  ];

  return (
    <SliderWrapper>
      <Carousel autoplay autoplaySpeed={5000} dots={false} easing="ease-in-out">
        {slides.map((slide, index) => (
          <div key={index}>
            <HeroSection
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContentWrapper>
                <Content>
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    WELCOME TO LIGHTHOUSE
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    We are a bunch of people from different walks of life used by God 
                    to love and care for people with the heart and mind of Christ. 
                    Our desire is that we would all together be instrumental in helping 
                    and supporting each other to be edified/transformed in our heart, 
                    mind, spirit and to transform the community around us to make this 
                    world a better place!
                  </motion.p>
                </Content>

                <ImageContainer
                  as={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Img src={heroImage} alt="About Lighthouse" />
                </ImageContainer>
              </ContentWrapper>
            </HeroSection>
          </div>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

// ===== STYLED COMPONENTS =====

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 70px;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: auto;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eaffff 0%, #d4f0f0 100%);
  padding: 60px 50px;
  min-height: calc(100vh - 70px);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 50px 30px;
    min-height: auto;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 50px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 30px 16px 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  max-width: 55%;
  position: relative;
  z-index: 2;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    text-align: left;
    line-height: 1.2;
    color: #1a1a2e;
    margin-bottom: 10px;
    letter-spacing: 2px;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #e63950, #ff6b81);
      margin-top: 10px;
      border-radius: 2px;
    }
  }

  h3 {
    text-align: left;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    color: #e63950;
    font-weight: 700;
    margin: 20px 0 10px;
    letter-spacing: 1px;
  }

  p {
    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
    color: #444;
    line-height: 1.8;
    margin: 20px 0;
    max-width: 95%;
  }

  @media (max-width: 1024px) {
    max-width: 50%;

    p {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;

    h1 {
      text-align: center;
      
      &::after {
        margin: 10px auto 0;
      }
    }

    h3 {
      text-align: center;
    }

    p {
      max-width: 100%;
      font-size: 0.95rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 40%;
  }

  @media (max-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 75%;
  }
`;

const Img = styled(motion.img)`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  object-fit: cover;
  display: block;
  aspect-ratio: 1/1;
  border: 4px solid white;

  &:hover {
    transform: scale(1.03) rotate(-1deg);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 16px;
    aspect-ratio: 1/1;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

export default AboutSlider;