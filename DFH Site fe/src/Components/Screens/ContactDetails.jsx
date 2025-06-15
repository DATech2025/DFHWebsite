// src/components/ContactDetails.js
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/bg_for_feedback.jpg';

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  margin-top: 90px;
  column-gap: 10%;
  transition: all 0.3s ease-in-out;
  max-width: 100%;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
    column-gap: 0;
    width: 100%;
  }
`;

function ContactDetails() {
  return (
    <HeroSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="text-center mb-4 text-white">Contact Information</h2>
        <div className="row g-4 justify-content-center">
          {/* Address */}
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
              <h5><i className="bi bi-geo-alt-fill me-2"></i>Address</h5>
              <p className="text-muted mb-0">'Lighthouse',</p>
              <p className="text-muted mb-0">1137, 14th Ave East,</p>
              <p className="text-muted mb-0">Owen Sound N4K 0A1 ,</p>
              <p className="text-muted mb-0">ON, Canada</p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
              <h5><i className="bi bi-telephone-fill me-2"></i>Call us</h5>
              <p className="text-muted">+1 519 377 7466</p>
            </div>
          </div>

          {/* Email */}
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
              <h5><i className="bi bi-envelope-fill me-2"></i>Email</h5>
              <p className="text-muted">desperateforhimcanada@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
}

export default ContactDetails;
