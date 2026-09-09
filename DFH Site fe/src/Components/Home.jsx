import React from 'react';
import styled from 'styled-components';
import HeroSlider from './Screens/HeroSlider';
import FeatureSection from './Screens/FeatureSection';

const Home = () => {
  return (
    <HomeWrapper>
      <HeroSlider />
      <FeatureSection />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f9f9f9;
`;

export default Home;