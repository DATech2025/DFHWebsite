import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bg from '../../assets/bg_for_feedback.jpg';

const testimonials = [
  {
    id: 1,
    name: "Donald Boyd",
    role: "Interim Pastor, Calvary EMCC",
    feedback: "I have been serving at Calvary Church in Owen Sound as Interim Pastor for approximately a year now. It has been a joy for me to get to know Paul and his wife, Sharmila. I have found them both to be sincere and active followers of Christ. They are members of the church and share a good reputation among our people. The call of God on Paul's life is obvious to me. I know that he is regularly involved in a variety of ministries; outreach among the poor and homeless in our city, radio programming into India, and assisting with a feeding program for the impoverished children in the same country, hosting and leading Bible Studies and Prayer Meetings in their home (As Covid allows), as well as helping at our church on a regular basis. Paul has chosen to only work less than full-time at his employment (¾ or 0.8 time, I believe) so that he has more time to devote to ministry. In their basement, Paul has set up a whole recording studio where he creates teaching programs, primarily to be broadcast overseas and hosts spiritual gatherings.",
    date: "2023"
  },
  {
    id: 2,
    name: "Rev. Mary M. Turner",
    role: "Lead Pastor, Calvary EMCC",
    feedback: "To Whom It May Concern: I have had the privilege of having Paul Ernest in my congregation at Calvary Evangelical Missionary Church for five years. It is with absolute confidence and a great respect that I submit this letter of endorsement for him. When he arrived here at Calvary, he started a house group that quickly grew. Paul serves as an elder, has a pastor's heart and is filled with the Holy Spirit. He is a man of prayer, integrity, honour and wisdom. He is an anointed man of God which is evident when he preaches. I offer my complete endorsement for consideration in any future ministry and/or employment endeavours for which he may apply. Any church/ministry would be blessed beyond measure to have Paul in their employ.",
    date: "2023"
  }
];

const TestimonialFeedBack = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (testimonial, index) => {
    setSelectedTestimonial(testimonial);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedTestimonial(testimonials[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedTestimonial(testimonials[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

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
          <Title>What People Say</Title>
          <Subtitle>Testimonials from our community and partners</Subtitle>
        </motion.div>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              onClick={() => openModal(testimonial, index)}
            >
              <QuoteIcon>
                <FaQuoteLeft size={24} />
              </QuoteIcon>
              <TestimonialContent>
                <TestimonialText>
                  "{testimonial.feedback.slice(0, 180)}..."
                </TestimonialText>
                <ReadMore>Click to read full testimony →</ReadMore>
              </TestimonialContent>
              <TestimonialFooter>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialRole>{testimonial.role}</TestimonialRole>
              </TestimonialFooter>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        {/* Full Testimonial Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={closeModal}>
                  <FaTimes size={24} />
                </CloseButton>

                <ModalHeader>
                  <ModalName>{selectedTestimonial.name}</ModalName>
                  <ModalRole>{selectedTestimonial.role}</ModalRole>
                  {selectedTestimonial.date && (
                    <ModalDate>{selectedTestimonial.date}</ModalDate>
                  )}
                </ModalHeader>

                <ModalBody>
                  <QuoteIconLarge>
                    <FaQuoteLeft size={32} />
                  </QuoteIconLarge>
                  <ModalText>{selectedTestimonial.feedback}</ModalText>
                  <QuoteIconRight>
                    <FaQuoteRight size={32} />
                  </QuoteIconRight>
                </ModalBody>

                <ModalFooter>
                  <NavButtonLeft onClick={goToPrevious}>
                    <FaChevronLeft size={24} />
                  </NavButtonLeft>
                  <Counter>
                    {currentIndex + 1} / {testimonials.length}
                  </Counter>
                  <NavButtonRight onClick={goToNext}>
                    <FaChevronRight size={24} />
                  </NavButtonRight>
                </ModalFooter>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
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
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin: 15px auto 40px;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

const QuoteIcon = styled.div`
  color: #e63950;
  opacity: 0.3;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
`;

const TestimonialText = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  color: #333;
  line-height: 1.8;
  margin: 0 0 12px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const ReadMore = styled.span`
  font-size: 0.85rem;
  color: #e63950;
  font-weight: 600;
  display: inline-block;
  transition: color 0.3s ease;

  ${TestimonialCard}:hover & {
    color: #c0392b;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const TestimonialFooter = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid rgba(0, 0, 0, 0.05);
`;

const TestimonialName = styled.h4`
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`;

const TestimonialRole = styled.p`
  font-size: clamp(0.8rem, 0.9vw, 0.85rem);
  color: #888;
  margin: 4px 0 0;
`;

// ===== MODAL STYLES =====

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
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
    align-items: flex-start;
    padding-top: 40px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 30px;
  }
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 24px;
  max-width: 750px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  cursor: default;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  padding: 40px 40px 30px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e63950;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding: 30px 24px 20px;
    border-radius: 20px;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    padding: 20px 16px 16px;
    border-radius: 16px;
    max-height: 80vh;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 0;
  float: right;
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
  margin: -10px -10px 0 0;

  &:hover {
    background: rgba(230, 57, 80, 0.9);
    transform: rotate(90deg) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    margin: -5px -5px 0 0;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 20px;
  padding-right: 50px;

  @media (max-width: 480px) {
    padding-right: 40px;
  }
`;

const ModalName = styled.h2`
  font-size: clamp(1.3rem, 1.8vw, 1.8rem);
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
`;

const ModalRole = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: #e63950;
  font-weight: 600;
  margin: 4px 0;
`;

const ModalDate = styled.span`
  font-size: 0.8rem;
  color: #888;
  display: inline-block;
  margin-top: 4px;
  padding: 2px 12px;
  background: #f0f0f0;
  border-radius: 20px;
`;

const ModalBody = styled.div`
  position: relative;
  padding: 0 10px;
`;

const QuoteIconLarge = styled.div`
  color: #e63950;
  opacity: 0.15;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const QuoteIconRight = styled.div`
  color: #e63950;
  opacity: 0.15;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const ModalText = styled.p`
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  color: #444;
  line-height: 1.9;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 20px;
    padding-top: 16px;
  }
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: #333;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e63950;
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const NavButtonLeft = styled(NavButton)``;
const NavButtonRight = styled(NavButton)``;

const Counter = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    min-width: 50px;
  }
`;

export default TestimonialFeedBack;