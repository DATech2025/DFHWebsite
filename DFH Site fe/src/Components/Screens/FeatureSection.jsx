import React from "react";
import styled from "styled-components";

// Image imports
import Confrence from "../../assets/Confrence.jpeg";
import Schedule1 from "../../assets/schedule1.jpg";
import Schedule2 from "../../assets/schedule2.jpg";
import lighthouse from "../../assets/lighthouse.jpg";
import gowomen from "../../assets/gowomen.jpg";
import famretreat from "../../assets/pic6.jpeg";
import famretreat1 from "../../assets/christmas.jpeg";
import famretreat2 from "../../assets/praiseandworship.jpeg";
import glow from "../../assets/glow.jpeg";
import believe from "../../assets/believe.jpeg";
import lh from "../../assets/lh.jpg";
import potluck from "../../assets/mainpic 1.jpg"

const FeatureSection = () => {
  const features = [
    { title: "Lighthouse Potluck", image: potluck },
    { title: "You are the Lighthouse !", image: lh },
    { title: "Women's Conference", image: Confrence },
    { title: "Schedule - 2024", image: Schedule1 },
    { title: "Schedule - 2023", image: Schedule2 },
    { title: "Light House", image: lighthouse },
    { title: "Go Women", image: gowomen },
    { title: "Family Retreat", image: famretreat },
    { title: "Christmas Party", image: famretreat1 },
    { title: "Praise and Worship ", image: famretreat2 },
    { title: "Glow", image: glow },
    { title: "How not to Believe", image: believe },
  ];

  return (
    <SectionContainer>
      <h2 className="mb-5">Upcoming Events:</h2>
      {features.map((feature, index) => (
        <ImageContainer key={index}>
          <h3>{feature.title}</h3>
          <StyledImage src={feature.image} alt={feature.title} />
        </ImageContainer>
      ))}
      <div style={{ margin: "40px 0", fontWeight: "bold" }}>
        More Events coming soon…
      </div>
    </SectionContainer>
  );
};

/* ---------- Styled Components ---------- */

const SectionContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
`;

const ImageContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;

export default FeatureSection;
