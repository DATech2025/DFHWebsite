import React from 'react';
import styled from 'styled-components';
import ContactDetails from "./Screens/ContactDetails.jsx";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactDetails />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f4f7fc;
`;

export default Contact;