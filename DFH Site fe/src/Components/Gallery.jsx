import React from 'react';
import styled from 'styled-components';
import GalleryImages from "./Screens/GalleryImages.jsx";

const Gallery = () => {
  return (
    <GalleryWrapper>
      <GalleryImages />
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f4f7fc;
`;

export default Gallery;