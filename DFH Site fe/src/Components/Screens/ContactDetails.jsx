// src/components/ContactDetails.js
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function ContactDetails() {

  const HeroSection = styled(motion.div)`

  display: flex;
  align-items: center;
  justify-content: center;
  background:rgb(239, 250, 250);
  padding: 50px;
  margin-top: 90px;
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

  return (
    <HeroSection >

      <div className="container">
        <h2 className="text-center mb-4" style={{  }}>Contact Information</h2>
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
              {/* <p className="text-muted">+1 (987) 654-3210</p> */}
            </div>
          </div>

          {/* Email */}
          <div className="col-12">
            <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
              <h5><i className="bi bi-envelope-fill me-2"></i>Email</h5>
              <p className="text-muted">desperateforhimcanada@gmail.com</p>
              {/* <p className="text-muted">support@yourcompany.com</p> */}
            </div>
          </div>
        </div>

        {/* Optional: Google Maps Embed */}
        {/* <div className="row mt-5">
        <div className="col-12">
          <div className="ratio ratio-16x9 shadow-sm rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2197605369724!2d-122.4194151846815!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0df94b97%3A0x42a3d233b7f9b4c4!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611099122971!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div> */}
      </div>

    </HeroSection>
  );
}

export default ContactDetails;
