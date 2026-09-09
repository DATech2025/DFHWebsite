import React from 'react';
import styled from 'styled-components';
import LifeStories from "./Screens/LifeStories.jsx";

const Stories = () => {
  return (
    <StoriesWrapper>
      <LifeStories />
    </StoriesWrapper>
  );
};

const StoriesWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f9f9f9;
`;

export default Stories;