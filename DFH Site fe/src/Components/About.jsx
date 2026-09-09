import React from 'react';
import styled from 'styled-components';
import AboutSlider from "./Screens/AboutSlider";
import VisionMission from "./Screens/VisionMision";
import Values from "./Screens/Values";

const About = () => {
  return (
    <AboutWrapper>
      <AboutSlider />
      <VisionMission />
      <Values />
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f9f9f9;
`;

export default About;