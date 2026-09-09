import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Image imports
import Confrence from "../../assets/Confrence.jpeg";
import Schedule1 from "../../assets/schedule1.jpg";
import Schedule2 from "../../assets/schedule2.jpg";
import lighthouse from "../../assets/lighthouse.jpg";
import gowomen from "../../assets/gowomen.jpg";
import famretreat from "../../assets/pic6.jpeg";
import famretreat1 from "../../assets/christmas.jpeg";
import famretreat2 from "../../assets/praiseandworship.jpeg";
import glow from "../../assets/glow.jpeg";
import believe from "../../assets/believe.jpeg";
import lh from "../../assets/lh.jpg";
import potluck from "../../assets/mainpic 1.jpg";

const FeatureSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const features = [
    { title: "Lighthouse Potluck", image: potluck },
    { title: "You are the Lighthouse!", image: lh },
    { title: "Women's Conference", image: Confrence },
    { title: "Schedule - 2024", image: Schedule1 },
    { title: "Schedule - 2023", image: Schedule2 },
    { title: "Light House", image: lighthouse },
    { title: "Go Women", image: gowomen },
    { title: "Family Retreat", image: famretreat },
    { title: "Christmas Party", image: famretreat1 },
    { title: "Praise and Worship", image: famretreat2 },
    { title: "Glow", image: glow },
    { title: "How not to Believe", image: believe },
  ];

  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <SectionContainer>
      <SectionHeader>
        <h2>Upcoming Events</h2>
        <p>Join us in our community activities and events</p>
      </SectionHeader>

      <GridContainer>
        {features.map((feature, index) => (
          <EventCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            isHovered={hoveredIndex === index}
            onClick={() => openModal(feature.image, feature.title)}
          >
            <CardImage src={feature.image} alt={feature.title} />
            <CardOverlay isHovered={hoveredIndex === index}>
              <CardTitle>{feature.title}</CardTitle>
              <ViewIcon>🔍</ViewIcon>
            </CardOverlay>
          </EventCard>
        ))}
      </GridContainer>

      <MoreEvents>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Events coming soon…
        </motion.div>
      </MoreEvents>

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
  padding: 60px 24px 80px;
  background: #f9f9f9;

  @media (max-width: 768px) {
    padding: 40px 16px 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 50px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
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
    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
    color: #666;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
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
    gap: 15px;
  }
`;

const EventCard = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ isHovered }) => 
    isHovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
      : '0 4px 15px rgba(0, 0, 0, 0.06)'
  };
  transition: all 0.3s ease;
  aspect-ratio: 4/3;
  background: #fff;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 480px) {
    border-radius: 12px;
    aspect-ratio: 4/3;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${EventCard}:hover & {
    transform: scale(1.08);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    transparent 100%
  );
  transform: ${({ isHovered }) => 
    isHovered ? 'translateY(0)' : 'translateY(10px)'
  };
  transition: transform 0.3s ease;
  opacity: ${({ isHovered }) => isHovered ? 1 : 0.8};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
    transform: translateY(0);
    opacity: 0.9;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.3) 60%,
      transparent 100%
    );
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: clamp(0.85rem, 1.1vw, 1.1rem);
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.2;
  }
`;

const ViewIcon = styled.span`
  color: white;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: 10px;

  ${EventCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
    font-size: 1rem;
  }
`;

const MoreEvents = styled.div`
  text-align: center;
  margin-top: 50px;

  div {
    display: inline-block;
    padding: 12px 36px;
    background: linear-gradient(135deg, #e63950, #ff6b81);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 57, 80, 0.3);

    &:hover {
      box-shadow: 0 8px 25px rgba(230, 57, 80, 0.4);
    }
  }

  @media (max-width: 768px) {
    margin-top: 35px;

    div {
      padding: 10px 28px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;

    div {
      padding: 10px 24px;
      font-size: 0.9rem;
    }
  }
`;

// ===== MODAL STYLES =====

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* 0.7 opacity for darker overlay */
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
    background: rgba(0, 0, 0, 0.8);
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

  &:active {
    transform: scale(0.9);
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

export default FeatureSection;