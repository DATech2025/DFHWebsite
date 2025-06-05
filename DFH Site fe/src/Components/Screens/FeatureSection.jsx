import React, { useState } from "react";
import styled from "styled-components";
import { Card, Modal } from "antd";
import { motion } from "framer-motion";

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

const FeatureSection = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      title: "You are the Lighthouse !",
      image: lh,
    },
    {
      title: "Women's Conference ",
      image: Confrence,
    },
    {
      title: "Schedule - 2024",
      image: Schedule1,
    },
    {
      title: "Schedule - 2023",
      image: Schedule2,
    },
    {
      title: "Light House",
      image: lighthouse,
    },
    {
      title: "Go Women",
      image: gowomen,
    },
    {
      title: "Family Retreat - 2024",
      image: famretreat,
    },
    {
      title: "Christmas Party - 2024",
      image: famretreat1,
    },
    {
      title: "Praise and Worship - 2024",
      image: famretreat2,
    },
    {
      title: "Glow",
      image: glow,
    },
    {
      title: "How not to Believe",
      image: believe,
    },
  ];

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming events:
      </motion.h2>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardTitle>{feature.title}</CardTitle>
            <img
              src={feature.image}
              alt={feature.title}
              className="imggrid"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedImage(feature.image);
                setPreviewVisible(true);
              }}
            />
          </FeatureCard>
        ))}

        <div style={{ marginTop: "200px" }}>More Events coming soon …</div>
      </FeaturesGrid>

      {/* Modal for image preview */}
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        centered
        width={800}
      >
        <img
          alt="Preview"
          src={selectedImage}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Modal>
    </SectionContainer>
  );
};

/* ---------- Styled Components ---------- */

const SectionContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f9f9f9;

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const FeaturesGrid = styled.div`
 @media (min-width:425px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
    justify-content: center;
 }

  @media (max-width:425px){
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
    justify-content: center;
  }
`;

const FeatureCard = styled(motion(Card))`
  border-radius: 10px;
  padding: 10px;
  background: white;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

/* Optional: Add smooth hover effect for the image */
const ImgGrid = styled.img`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export default FeatureSection;
