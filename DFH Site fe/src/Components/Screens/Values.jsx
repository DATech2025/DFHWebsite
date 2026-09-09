import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Confrence from "../../assets/Faith.jpg";
import Schedule1 from "../../assets/beliefeWord.jpg";
import Schedule2 from "../../assets/LoveAction.jpeg";
import lighthouse from "../../assets/Embracing.jpg";
import gowomen from "../../assets/Equiping.jpg";
import famretreat from "../../assets/Praying.jpg";

const Values = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const features = [
    {
      title: "FAITH IN GOD",
      image: Confrence,
      description: "Trusting in God's plan and purpose for our lives"
    },
    {
      title: "BELIEF IN HIS WORD",
      image: Schedule1,
      description: "Standing firm on the promises of Scripture"
    },
    {
      title: "LOVE IN ACTION",
      image: Schedule2,
      description: "Demonstrating God's love through practical service"
    },
    {
      title: "EMBRACING MISSION",
      image: lighthouse,
      description: "Living out the Great Commission daily"
    },
    {
      title: "EQUIPPING THE CHRISTIAN",
      image: gowomen,
      description: "Preparing believers for works of service"
    },
    {
      title: "PRAYING WITH EXPECTATION",
      image: famretreat,
      description: "Believing God for breakthrough and transformation"
    }
  ];

  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "unset";
  };

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        OUR VALUES
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        The core principles that guide our ministry
      </motion.p>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" }}
            viewport={{ once: true }}
            onClick={() => openModal(feature.image, feature.title)}
          >
            <ImageWrapper>
              <FeatureImage src={feature.image} alt={feature.title} />
              <ImageOverlay>
                <span>🔍</span>
              </ImageOverlay>
            </ImageWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <Description>{feature.description}</Description>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      <BottomSection>
        <h4>'Lighthouse' is a project of 'Desperate for Him (Christ)' team, Canada.</h4>
        <div>
          <h6>To know more about our partner in India, click on the link:</h6>
          <a href="https://desperateforhim.org" target="_blank" rel="noopener noreferrer">
            <PartnerLink>Desperate for Him, India</PartnerLink>
          </a>
        </div>
      </BottomSection>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>
                <FaTimes size={24} />
              </CloseButton>
              <ModalImage src={selectedImage} alt={selectedTitle} />
              <ModalTitle>{selectedTitle}</ModalTitle>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

// ===== STYLED COMPONENTS =====

const SectionContainer = styled.div`
  text-align: center;
  padding: 60px 24px 80px;
  background: #f9f9f9;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: #1a1a2e;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #e63950, #ff6b81);
      border-radius: 2px;
    }
  }

  p {
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    color: #666;
    max-width: 500px;
    margin: 20px auto 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 16px 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 50px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  padding: 0;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f0f0f0;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  span {
    color: white;
    font-size: 2.5rem;
    background: rgba(0, 0, 0, 0.4);
    padding: 15px;
    border-radius: 50%;
    backdrop-filter: blur(4px);
  }

  ${FeatureCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 0.6;

    span {
      font-size: 1.8rem;
      padding: 10px;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 15px 15px 5px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 10px 10px 3px;
  }
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 0.9vw, 0.9rem);
  color: #666;
  margin: 0 15px 15px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin: 0 10px 10px;
  }
`;

const BottomSection = styled.div`
  margin-top: 60px;

  h4 {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    color: #1a1a2e;
    font-weight: 600;
  }

  h6 {
    font-size: clamp(0.9rem, 1vw, 1rem);
    color: #888;
    margin-top: 30px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const PartnerLink = styled.h6`
  display: inline-block;
  color: #1a1a2e;
  text-decoration: none;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: 700;
  padding: 8px 24px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  margin-top: 5px;

  &:hover {
    background: linear-gradient(135deg, #e63950, #ff6b81);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(230, 57, 80, 0.3);
  }
`;

// ===== MODAL STYLES =====

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  cursor: default;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
    max-width: 95vw;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(230, 57, 80, 0.9);
    transform: rotate(90deg) scale(1.1);
  }

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  display: block;

  @media (max-width: 768px) {
    max-height: 60vh;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    max-height: 50vh;
  }
`;

const ModalTitle = styled.h3`
  margin-top: 16px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-top: 10px;
  }
`;

export default Values;