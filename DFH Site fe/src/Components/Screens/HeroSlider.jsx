import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import lighHouse from "../../assets/lighthouse2.png";

const HeroSlider = () => {
  const slides = [
    {
      title: "Lighthouse",
      description:
        "We are a bunch of people from different walks of life used by God to love and care for people with the heart and mind of Christ. Our desire is that we would all together be instrumental in helping and supporting each other to be edified/transformed in our heart, mind, spirit and to transform the community around us to make this world a better place! Feel free to explore the other pages of this website, join us at our meetings and pray for us fervently on a regular basis."
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
              {/* Background Image on the right */}
              <BackgroundImageWrapper>
                <BackgroundImg 
                  src={lighHouse} 
                  alt="Lighthouse Background"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </BackgroundImageWrapper>

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
                    WELCOME!
                  </motion.h3>

                  <motion.h5
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    It's a pleasure to have you visiting our website!
                  </motion.h5>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                </Content>
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
  background: linear-gradient(135deg, #f3fafa 0%, #e8f4f4 100%);
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

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translateY(-50%);
  width: 45%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 50%;
    right: -8%;
  }

  @media (max-width: 768px) {
    width: 55%;
    right: -10%;
    height: 70%;
    opacity: 0.4;
  }

  @media (max-width: 480px) {
    width: 65%;
    right: -15%;
    height: 60%;
    opacity: 0.3;
  }
`;

const BackgroundImg = styled(motion.img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  display: block;
  filter: blur(3px);
  opacity: 0.5;

  @media (max-width: 768px) {
    filter: blur(5px);
    opacity: 0.6;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    filter: blur(5px);
    opacity: 0.6;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Content = styled(motion.div)`
  flex: 1;
  max-width: 55%;
  position: relative;
  z-index: 3;
  padding: 20px 20px 20px 0;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    text-align: left;
    line-height: 1.2;
    color: #1a1a2e;
    margin-bottom: 10px;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
  }

  h3 {
    text-align: left;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    color: #e63950;
    font-weight: 700;
    margin: 15px 0 5px;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
  }

  h5 {
    text-align: left;
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    color: #555;
    font-weight: 500;
    margin-bottom: 20px;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
  }

  p {
    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
    color: #444;
    line-height: 1.8;
    margin: 20px 0;
    max-width: 90%;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 1024px) {
    max-width: 60%;

    p {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 70%;
    padding: 20px 15px 20px 0;

    h1 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
    }

    h3 {
      font-size: clamp(1rem, 2vw, 1.4rem);
    }

    h5 {
      font-size: clamp(0.85rem, 1.5vw, 1.1rem);
    }

    p {
      max-width: 100%;
      font-size: clamp(0.8rem, 1.2vw, 0.95rem);
      line-height: 1.6;
    }
  }

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 15px 12px 15px 0;

    h1 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 0.95rem;
    }

    h5 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }
`;

export default HeroSlider;