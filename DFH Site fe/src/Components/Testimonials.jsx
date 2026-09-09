import React from 'react';
import styled from 'styled-components';
import TestimonialFeedBack from "./Screens/TestimonialFeedBack.jsx";

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialFeedBack />
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f4f7fc;
`;

export default Testimonials;