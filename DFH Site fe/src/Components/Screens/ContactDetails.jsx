import React, { useState } from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import bg from '../../assets/bg_for_feedback.jpg';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <HeroSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Get in Touch</Title>
          <Subtitle>We'd love to hear from you. Reach out to us with any questions, prayer requests, or to learn more about our ministry.</Subtitle>
        </motion.div>

        <ContactGrid>
          {/* Contact Information */}
          <ContactInfo
            as={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            
            <InfoItem
              as={motion.div}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Address</InfoLabel>
                <InfoText>
                  'Lighthouse'<br />
                  1137, 14th Ave East,<br />
                  Owen Sound N4K 0A1,<br />
                  ON, Canada
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem
              as={motion.div}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <InfoIcon>
                <FaPhone />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
                <InfoText>
                  <a href="tel:+15193777466">+1 519 377 7466</a>
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem
              as={motion.div}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>
                  <a href="mailto:desperateforhimcanada@gmail.com">
                    desperateforhimcanada@gmail.com
                  </a>
                </InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem
              as={motion.div}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <InfoIcon>
                <FaClock />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Meeting Times</InfoLabel>
                <InfoText>
                  Friday: 6:00 PM<br />
                  Sunday: 10:00 AM
                </InfoText>
              </InfoContent>
            </InfoItem>

            <SocialSection>
              <SocialTitle>Connect With Us</SocialTitle>
              <SocialIcons>
                <SocialLink 
                  href="#" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  color="#1877f2"
                >
                  <FaFacebook />
                </SocialLink>
                <SocialLink 
                  href="#" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  color="#e4405f"
                >
                  <FaInstagram />
                </SocialLink>
                <SocialLink 
                  href="#" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  color="#ff0000"
                >
                  <FaYoutube />
                </SocialLink>
                <SocialLink 
                  href="#" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  color="#1da1f2"
                >
                  <FaTwitter />
                </SocialLink>
              </SocialIcons>
            </SocialSection>
          </ContactInfo>

          {/* Contact Form */}
          <ContactForm
            as={motion.div}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FormTitle>Send Us a Message</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Your Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormTextarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </SubmitButton>

              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FaCheckCircle /> Thank you! Your message has been sent successfully.
                </SuccessMessage>
              )}
            </Form>
          </ContactForm>
        </ContactGrid>
      </Container>
    </HeroSection>
  );
};

// ===== STYLED COMPONENTS =====

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 100px 24px 60px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    padding: 70px 12px 30px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #e63950, #ff6b81);
    margin: 12px auto 0;
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  max-width: 650px;
  margin: 15px auto 40px;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// ===== CONTACT INFO STYLES =====

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 25px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

const InfoTitle = styled.h2`
  font-size: clamp(1.3rem, 1.8vw, 1.8rem);
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 10px 0;
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: rgba(230, 57, 80, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e63950;
  font-size: 1rem;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    min-width: 35px;
    font-size: 0.85rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h6`
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 4px;
`;

const InfoText = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  color: #333;
  margin: 0;
  line-height: 1.6;

  a {
    color: #e63950;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #c0392b;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

// ===== SOCIAL STYLES =====

const SocialSection = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid rgba(0, 0, 0, 0.06);
`;

const SocialTitle = styled.h6`
  font-size: 0.85rem;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${props => props.color}15;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid ${props => props.color}30;

  &:hover {
    background: ${props => props.color};
    color: white;
    border-color: ${props => props.color};
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
`;

// ===== CONTACT FORM STYLES =====

const ContactForm = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 25px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

const FormTitle = styled.h2`
  font-size: clamp(1.3rem, 1.8vw, 1.8rem);
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  color: #333;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #e63950;
    box-shadow: 0 0 0 4px rgba(230, 57, 80, 0.1);
    background: white;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  color: #333;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #e63950;
    box-shadow: 0 0 0 4px rgba(230, 57, 80, 0.1);
    background: white;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
    border-radius: 10px;
    min-height: 100px;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 14px 32px;
  background: linear-gradient(135deg, #e63950, #ff6b81);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(230, 57, 80, 0.3);

  &:hover {
    box-shadow: 0 8px 25px rgba(230, 57, 80, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 12px 16px;
  background: #d4edda;
  color: #155724;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #c3e6cb;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px 14px;
  }
`;

export default ContactDetails;