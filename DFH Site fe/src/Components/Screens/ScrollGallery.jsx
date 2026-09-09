import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import all images
import blm2 from "../../assets/Gallery/blm2.jpeg";
import blm3 from "../../assets/Gallery/blm3.jpeg";
import bloom1 from "../../assets/Gallery/bloom1.jpeg";
import blm4 from "../../assets/Gallery/blm4.jpeg";
import blm5 from "../../assets/Gallery/blm5.jpeg";
import blm6 from "../../assets/Gallery/blm6.jpeg";
import blm7 from "../../assets/Gallery/blm7.jpeg";
import blm8 from "../../assets/Gallery/blm8.jpeg";
import blm9 from "../../assets/Gallery/blm9.jpeg";
import blm10 from "../../assets/Gallery/blm10.jpeg";
import blm11 from "../../assets/Gallery/blm11.jpeg";
import blm12 from "../../assets/Gallery/blm12.jpeg";
import blm13 from "../../assets/Gallery/blm13.jpeg";

import fr1 from "../../assets/Gallery/fr1.jpeg";
import fr2 from "../../assets/Gallery/fr2.jpeg";
import fr3 from "../../assets/Gallery/fr3.jpeg";
import fr4 from "../../assets/Gallery/fr4.jpeg";
import fr5 from "../../assets/Gallery/fr5.jpeg";
import fr6 from "../../assets/Gallery/fr6.jpeg";
import fr7 from "../../assets/Gallery/fr7.jpeg";
import fr8 from "../../assets/Gallery/fr8.jpeg";
import fr9 from "../../assets/Gallery/fr9.jpeg";
import fr10 from "../../assets/Gallery/fr10.jpeg";
import fr11 from "../../assets/Gallery/fr11.jpeg";
import fr12 from "../../assets/Gallery/fr12.jpeg";
import fr13 from "../../assets/Gallery/fr13.jpeg";

import gr1 from "../../assets/Gallery/gr1.jpeg";
import gr2 from "../../assets/Gallery/gr2.jpeg";
import gr3 from "../../assets/Gallery/gr3.jpeg";
import gr4 from "../../assets/Gallery/gr4.jpeg";
import gr5 from "../../assets/Gallery/gr5.jpeg";
import gr6 from "../../assets/Gallery/gr6.png";
import gr7 from "../../assets/Gallery/gr7.png";
import gr8 from "../../assets/Gallery/gr8.jpeg";
import gr9 from "../../assets/Gallery/gr9.jpeg";
import gr10 from "../../assets/Gallery/gr10.jpeg";

import gowo1 from "../../assets/Gallery/gowo1.jpeg";
import gowo2 from "../../assets/Gallery/gowo2.jpeg";
import gowo3 from "../../assets/Gallery/gowo3.jpeg";
import gowo4 from "../../assets/Gallery/gowo4.jpeg";
import gowo5 from "../../assets/Gallery/gowo5.jpeg";
import gowo6 from "../../assets/Gallery/gowo6.jpeg";
import gowo7 from "../../assets/Gallery/gowo7.jpeg";
import gowo8 from "../../assets/Gallery/gowo8.jpeg";
import gowo9 from "../../assets/Gallery/gowo9.jpeg";
import gowo10 from "../../assets/Gallery/gowo10.jpeg";
import gowo11 from "../../assets/Gallery/gowo11.jpeg";

import cgt1 from "../../assets/Gallery/cgt1.jpeg";
import cgt2 from "../../assets/Gallery/cgt2.jpeg";
import cgt3 from "../../assets/Gallery/cgt3.jpeg";
import cgt4 from "../../assets/Gallery/cgt4.jpeg";
import cgt5 from "../../assets/Gallery/cgt5.jpg";
import cgt6 from "../../assets/Gallery/cgt6.jpeg";
import cgt7 from "../../assets/Gallery/cgt7.jpg";
import cgt8 from "../../assets/Gallery/cgt8.jpeg";
import cgt9 from "../../assets/Gallery/cgt9.jpg";
import cgt10 from "../../assets/Gallery/cgt10.jpg";
import cgt11 from "../../assets/Gallery/cgt11.jpg";
import cgt12 from "../../assets/Gallery/cgt12.jpg";
import cgt13 from "../../assets/Gallery/cgt13.jpg";
import cgt14 from "../../assets/Gallery/cgt14.jpg";
import cgt15 from "../../assets/Gallery/cgt15.jpg";
import cgt16 from "../../assets/Gallery/cgt16.jpg";
import cgt17 from "../../assets/Gallery/cgt17.jpg";
import cgt18 from "../../assets/Gallery/cgt18.jpg";

import cp1 from "../../assets/Gallery/cp1.jpg";
import cp2 from "../../assets/Gallery/cp2.jpg";
import cp3 from "../../assets/Gallery/cp3.jpg";
import cp4 from "../../assets/Gallery/cp4.jpg";
import cp5 from "../../assets/Gallery/cp5.jpg";
import cp6 from "../../assets/Gallery/cp6.jpg";
import cp7 from "../../assets/Gallery/cp7.jpg";
import cp8 from "../../assets/Gallery/cp8.jpg";
import cp9 from "../../assets/Gallery/cp9.jpg";
import cp10 from "../../assets/Gallery/cp10.jpg";
import cp11 from "../../assets/Gallery/cp11.jpg";
import cp12 from "../../assets/Gallery/cp12.jpg";
import cp13 from "../../assets/Gallery/cp13.jpg";
import cp14 from "../../assets/Gallery/cp14.jpg";
import cp15 from "../../assets/Gallery/cp15.jpg";

import meeting1 from "../../assets/Gallery/meeting1.jpg";
import meeting2 from "../../assets/Gallery/meeting2.jpg";
import meeting3 from "../../assets/Gallery/meeting3.jpg";
import meeting4 from "../../assets/Gallery/meeting4.jpg";
import meeting5 from "../../assets/Gallery/meeting5.jpg";
import meeting6 from "../../assets/Gallery/meeting6.jpg";
import meeting7 from "../../assets/Gallery/meeting7.jpg";

import pc1 from "../../assets/Gallery/pc1.jpeg";
import pc2 from "../../assets/Gallery/pc2.jpeg";
import pc3 from "../../assets/Gallery/pc3.jpg";
import pc4 from "../../assets/Gallery/pc4.jpg";
import pc5 from "../../assets/Gallery/pc5.jpg";
import pc6 from "../../assets/Gallery/pc6.jpg";
import pc7 from "../../assets/Gallery/pc7.jpg";
import pc8 from "../../assets/Gallery/pc8.jpg";
import pc9 from "../../assets/Gallery/pc9.jpg";

import q1 from "../../assets/Gallery/q1.jpeg";
import q2 from "../../assets/Gallery/q2.jpeg";
import q3 from "../../assets/Gallery/q3.jpg";
import q4 from "../../assets/Gallery/q4.jpg";
import q5 from "../../assets/Gallery/q5.jpg";
import q6 from "../../assets/Gallery/q6.jpg";
import q7 from "../../assets/Gallery/q7.jpg";
import q8 from "../../assets/Gallery/q8.jpg";
import q9 from "../../assets/Gallery/q9.jpg";
import q10 from "../../assets/Gallery/q10.jpg";
import q11 from "../../assets/Gallery/q11.jpg";
import q12 from "../../assets/Gallery/q12.jpg";
import q13 from "../../assets/Gallery/q13.png";

const photoData = {
  "Bloom Conference": [
    { id: 1, src: blm2, alt: 'bloom 1' },
    { id: 2, src: bloom1, alt: 'bloom 2' },
    { id: 3, src: blm3, alt: 'bloom 3' },
    { id: 4, src: blm4, alt: 'bloom 4' },
    { id: 5, src: blm5, alt: 'bloom 5' },
    { id: 6, src: blm6, alt: 'bloom 6' },
    { id: 7, src: blm7, alt: 'bloom 7' },
    { id: 8, src: blm8, alt: 'bloom 8' },
    { id: 9, src: blm9, alt: 'bloom 9' },
    { id: 10, src: blm10, alt: 'bloom 10' },
    { id: 11, src: blm11, alt: 'bloom 11' },
    { id: 12, src: blm12, alt: 'bloom 12' },
    { id: 13, src: blm13, alt: 'bloom 13' },
  ],
  "Family Retreat": [
    { id: 1, src: fr1, alt: 'familyRetreat' },
    { id: 2, src: fr2, alt: 'familyRetreat' },
    { id: 3, src: fr3, alt: 'familyRetreat' },
    { id: 4, src: fr4, alt: 'familyRetreat' },
    { id: 5, src: fr5, alt: 'familyRetreat' },
    { id: 6, src: fr6, alt: 'familyRetreat' },
    { id: 7, src: fr7, alt: 'familyRetreat' },
    { id: 8, src: fr8, alt: 'familyRetreat' },
    { id: 9, src: fr9, alt: 'familyRetreat' },
    { id: 10, src: fr10, alt: 'familyRetreat' },
    { id: 11, src: fr11, alt: 'familyRetreat' },
    { id: 12, src: fr12, alt: 'familyRetreat' },
    { id: 13, src: fr13, alt: 'familyRetreat' },
  ],
  "Glow Retreat": [
    { id: 1, src: gr1, alt: 'Glow Retreat' },
    { id: 2, src: gr2, alt: 'Glow Retreat' },
    { id: 3, src: gr3, alt: 'Glow Retreat' },
    { id: 4, src: gr4, alt: 'Glow Retreat' },
    { id: 5, src: gr5, alt: 'Glow Retreat' },
    { id: 6, src: gr6, alt: 'Glow Retreat' },
    { id: 7, src: gr7, alt: 'Glow Retreat' },
    { id: 8, src: gr8, alt: 'Glow Retreat' },
    { id: 9, src: gr9, alt: 'Glow Retreat' },
    { id: 10, src: gr10, alt: 'Glow Retreat' },
  ],
  "Go Women Conference": [
    { id: 1, src: gowo1, alt: 'Go Women' },
    { id: 2, src: gowo2, alt: 'Go Women' },
    { id: 3, src: gowo3, alt: 'Go Women' },
    { id: 4, src: gowo4, alt: 'Go Women' },
    { id: 5, src: gowo5, alt: 'Go Women' },
    { id: 6, src: gowo6, alt: 'Go Women' },
    { id: 7, src: gowo7, alt: 'Go Women' },
    { id: 8, src: gowo8, alt: 'Go Women' },
    { id: 9, src: gowo9, alt: 'Go Women' },
    { id: 10, src: gowo10, alt: 'Go Women' },
    { id: 11, src: gowo11, alt: 'Go Women' },
  ],
  "Christmas Gathering 2023": [
    { id: 1, src: cgt1, alt: 'Christmas_Gathering' },
    { id: 2, src: cgt2, alt: 'Christmas_Gathering' },
    { id: 3, src: cgt3, alt: 'Christmas_Gathering' },
    { id: 4, src: cgt4, alt: 'Christmas_Gathering' },
    { id: 5, src: cgt5, alt: 'Christmas_Gathering' },
    { id: 6, src: cgt6, alt: 'Christmas_Gathering' },
    { id: 7, src: cgt7, alt: 'Christmas_Gathering' },
    { id: 8, src: cgt8, alt: 'Christmas_Gathering' },
    { id: 9, src: cgt9, alt: 'Christmas_Gathering' },
    { id: 10, src: cgt10, alt: 'Christmas_Gathering' },
    { id: 11, src: cgt11, alt: 'Christmas_Gathering' },
    { id: 12, src: cgt12, alt: 'Christmas_Gathering' },
    { id: 13, src: cgt13, alt: 'Christmas_Gathering' },
    { id: 14, src: cgt14, alt: 'Christmas_Gathering' },
    { id: 15, src: cgt15, alt: 'Christmas_Gathering' },
    { id: 16, src: cgt16, alt: 'Christmas_Gathering' },
    { id: 17, src: cgt17, alt: 'Christmas_Gathering' },
    { id: 18, src: cgt18, alt: 'Christmas_Gathering' },
  ],
  "Christmas Party 2024": [
    { id: 1, src: cp1, alt: 'Christmas_Gathering' },
    { id: 2, src: cp2, alt: 'Christmas_Gathering' },
    { id: 3, src: cp3, alt: 'Christmas_Gathering' },
    { id: 4, src: cp4, alt: 'Christmas_Gathering' },
    { id: 5, src: cp5, alt: 'Christmas_Gathering' },
    { id: 6, src: cp6, alt: 'Christmas_Gathering' },
    { id: 7, src: cp7, alt: 'Christmas_Gathering' },
    { id: 8, src: cp8, alt: 'Christmas_Gathering' },
    { id: 9, src: cp9, alt: 'Christmas_Gathering' },
    { id: 10, src: cp10, alt: 'Christmas_Gathering' },
    { id: 11, src: cp11, alt: 'Christmas_Gathering' },
    { id: 12, src: cp12, alt: 'Christmas_Gathering' },
    { id: 13, src: cp13, alt: 'Christmas_Gathering' },
    { id: 14, src: cp14, alt: 'Christmas_Gathering' },
    { id: 15, src: cp15, alt: 'Christmas_Gathering' },
  ],
  "Meetings": [
    { id: 1, src: meeting1, alt: 'Meeting' },
    { id: 2, src: meeting2, alt: 'Meeting' },
    { id: 3, src: meeting3, alt: 'Meeting' },
    { id: 4, src: meeting4, alt: 'Meeting' },
    { id: 5, src: meeting5, alt: 'Meeting' },
    { id: 6, src: meeting6, alt: 'Meeting' },
    { id: 7, src: meeting7, alt: 'Meeting' },
  ],
  "Prayer Cell": [
    { id: 1, src: pc2, alt: 'Meeting' },
    { id: 2, src: pc1, alt: 'Meeting' },
    { id: 3, src: pc3, alt: 'Meeting' },
    { id: 4, src: pc4, alt: 'Meeting' },
    { id: 5, src: pc5, alt: 'Meeting' },
    { id: 6, src: pc6, alt: 'Meeting' },
    { id: 7, src: pc7, alt: 'Meeting' },
    { id: 8, src: pc8, alt: 'Meeting' },
    { id: 9, src: pc9, alt: 'Meeting' },
  ],
  "Quotes": [
    { id: 1, src: q1, alt: 'Meeting' },
    { id: 2, src: q2, alt: 'Meeting' },
    { id: 3, src: q3, alt: 'Meeting' },
    { id: 4, src: q4, alt: 'Meeting' },
    { id: 5, src: q5, alt: 'Meeting' },
    { id: 6, src: q6, alt: 'Christmas_Gathering' },
    { id: 7, src: q7, alt: 'Christmas_Gathering' },
    { id: 8, src: q8, alt: 'Christmas_Gathering' },
    { id: 9, src: q9, alt: 'Christmas_Gathering' },
    { id: 10, src: q10, alt: 'Christmas_Gathering' },
    { id: 11, src: q11, alt: 'Christmas_Gathering' },
    { id: 12, src: q12, alt: 'Q1' },
    { id: 13, src: q13, alt: 'Q2' },
  ],
};

function ScrollGallery() {
  const [openCategory, setOpenCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (category) => {
    setOpenCategory(category);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpenCategory(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (!openCategory) return;
    const images = photoData[openCategory];
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    if (!openCategory) return;
    const images = photoData[openCategory];
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  // Keyboard navigation - FIXED: added goToPrevious/goToNext as dependencies
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex, openCategory]); // Added proper dependencies

  // Handle back button
  useEffect(() => {
    const handlePopState = () => {
      if (openCategory) {
        handleClose();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [openCategory]);

  const currentImages = openCategory ? photoData[openCategory] : [];

  return (
    <Container>
      <CategoriesGrid>
        {Object.entries(photoData).map(([category, images]) => (
          <CategoryCard
            key={category}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            onClick={() => handleOpen(category)}
          >
            <CategoryImageWrapper>
              <CategoryImage src={images[0].src} alt={category} />
              <CategoryOverlay>
                <span>📸 View Gallery</span>
              </CategoryOverlay>
            </CategoryImageWrapper>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryCount>{images.length} photos</CategoryCount>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {openCategory && currentImages.length > 0 && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>{openCategory}</ModalTitle>
                <CloseButton onClick={handleClose}>
                  <FaTimes size={24} />
                </CloseButton>
              </ModalHeader>

              <ModalBody>
                <NavButtonLeft onClick={goToPrevious}>
                  <FaChevronLeft size={30} />
                </NavButtonLeft>

                <ModalImageWrapper>
                  <ModalImage 
                    src={currentImages[currentImageIndex].src} 
                    alt={currentImages[currentImageIndex].alt} 
                  />
                  <ImageCounter>
                    {currentImageIndex + 1} / {currentImages.length}
                  </ImageCounter>
                </ModalImageWrapper>

                <NavButtonRight onClick={goToNext}>
                  <FaChevronRight size={30} />
                </NavButtonRight>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
}

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  padding: 20px 0;
  max-width: 1400px;
  margin: 0 auto;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
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

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

const CategoryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f0f0f0;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CategoryCard}:hover & {
    transform: scale(1.08);
  }
`;

const CategoryOverlay = styled.div`
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
    font-size: 0.95rem;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 30px;
    backdrop-filter: blur(4px);
  }

  ${CategoryCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 0.6;

    span {
      font-size: 0.8rem;
      padding: 8px 16px;
    }
  }
`;

const CategoryTitle = styled.h4`
  font-size: clamp(0.95rem, 1.1vw, 1.1rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 12px 12px 4px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 8px 8px 2px;
  }
`;

const CategoryCount = styled.p`
  font-size: clamp(0.75rem, 0.8vw, 0.85rem);
  color: #888;
  margin: 0 12px 12px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin: 0 8px 8px;
  }
`;

// ===== MODAL STYLES =====

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ModalContent = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 20px;
  max-width: 95vw;
  max-height: 92vh;
  width: 100%;
  position: relative;
  cursor: default;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    border-radius: 16px;
    max-width: 98vw;
    max-height: 90vh;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;

const ModalTitle = styled.h3`
  color: white;
  font-size: clamp(1rem, 1.2vw, 1.3rem);
  font-weight: 700;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(230, 57, 80, 0.8);
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  min-height: 60vh;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 50vh;
  }

  @media (max-width: 480px) {
    padding: 10px;
    min-height: 40vh;
  }
`;

const ModalImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 60vh;
  }

  @media (max-width: 480px) {
    max-height: 50vh;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 16px;
  border-radius: 20px;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    bottom: -35px;
    font-size: 0.75rem;
    padding: 4px 14px;
  }

  @media (max-width: 480px) {
    bottom: -30px;
    font-size: 0.7rem;
    padding: 4px 12px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.15);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const NavButtonLeft = styled(NavButton)`
  left: 10px;

  @media (max-width: 480px) {
    left: 5px;
  }
`;

const NavButtonRight = styled(NavButton)`
  right: 10px;

  @media (max-width: 480px) {
    right: 5px;
  }
`;

export default ScrollGallery;