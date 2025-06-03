import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import {
  UserOutlined,
  GlobalOutlined,
  SafetyOutlined,
  StarOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import Confrence from "../../assets/Confrence.jpeg"
import Schedule1 from "../../assets/schedule1.jpg"
import Schedule2 from "../../assets/schedule2.jpg"
import lighthouse from "../../assets/lighthouse.jpg"
import gowomen from "../../assets/gowomen.jpg"
import famretreat from "../../assets/pic6.jpeg"
import famretreat1 from "../../assets/christmas.jpeg"
import famretreat2 from "../../assets/praiseandworship.jpeg"
import glow from "../../assets/glow.jpeg"
import believe from "../../assets/believe.jpeg"






const FeatureSection = () => {
  const features = [
    {
      title: "Women's Conference ",
      icon: <UserOutlined />,
      image: Confrence,
      color: "#2ecc71",
      description:
        "Smartwave Academy offers personalized career assessment tests to individuals of all ages...",
    },
    {
      title: "Schedule - 2024",
      icon: <GlobalOutlined />,
      image: Schedule1,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    },
    {
      title: "Schedule - 2023",
      icon: <GlobalOutlined />,
      image: Schedule2,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    }, {
      title: "Light House",
      icon: <GlobalOutlined />,
      image: lighthouse,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    }, {
      title: "Go Women",
      icon: <GlobalOutlined />,
      image: gowomen,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    }, {
      title: "Family Retreat - 2024",
      icon: <GlobalOutlined />,
      image: famretreat,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    },
    {
      title: "Christmas Party - 2024",
      icon: <GlobalOutlined />,
      image: famretreat1,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    }, {
      title: "Praise and Worship - 2024",
      icon: <GlobalOutlined />,
      image: famretreat2,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    },
    {
      title: "Glow",
      icon: <GlobalOutlined />,
      image: glow,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    }, {
      title: "How not to Believe",
      icon: <GlobalOutlined />,
      image: believe,
      color: "#e74c3c",
      description:
        "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
    },
    
    
  ];

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        OUR EVENTS
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Upcoming events of our ministry
      </motion.p>
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
            {/* <IconContainer style={{ color: feature.color }}>
              
              <img src={feature.image} alt="" />
            </IconContainer> */}
            <CardTitle>{feature.title}</CardTitle>
            {/* <Description>{feature.description}</Description> */}
            <img src={feature.image} alt="" className="imggrid" />
          </FeatureCard>
        ))}

        <div style={{marginTop:'200px'}}>
          More Events coming soon …
        </div>

      </FeaturesGrid>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f9f9f9;

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
    max-width: 800px;
    margin: 0 auto 40px;
  }
`;

// const FeaturesGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-items: center;
//   justify-content: center;
// `;

// const FeatureCard = styled(motion(Card))`
//   width: 100%;
//   max-width: 320px;
//   min-width: 250px;
//   border-radius: 12px;
//   background: white;
//   padding: 20px;
//   text-align: center;
//   transition: all 0.3s ease-in-out;
//   cursor: pointer;
// `;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const FeatureCard = styled(motion(Card))`
  
`;

// const IconContainer = styled.div`
//   font-size: 28px;
//   margin-bottom: 12px;
// `;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

// const Description = styled.p`
//   font-size: 14px;
//   color: #666;
// `;

export default FeatureSection;
