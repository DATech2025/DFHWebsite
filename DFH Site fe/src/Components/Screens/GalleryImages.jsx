import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollGallery from "./ScrollGallery";

const GalleryImages = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Photo Gallery</Title>
        <Subtitle>Capturing moments of faith, fellowship, and community</Subtitle>
      </motion.div>

      <ScrollGallery />
    </Container>
  );
};

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  text-align: center;
  padding: 100px 24px 60px;
  background: linear-gradient(135deg, #f4f7fc 0%, #e8edf5 100%);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 70px 12px 30px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
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
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #e63950, #ff6b81);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: #666;
  max-width: 600px;
  margin: 25px auto 10px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default GalleryImages;