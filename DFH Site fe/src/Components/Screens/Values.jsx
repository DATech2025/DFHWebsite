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
import Confrence from "../../assets/Faith.jpg"
import Schedule1 from "../../assets/beliefeWord.jpg"
import Schedule2 from "../../assets/LoveAction.jpeg"
import lighthouse from "../../assets/Embracing.jpg"
import gowomen from "../../assets/Equiping.jpg"
import famretreat from "../../assets/Praying.jpg"
import famretreat1 from "../../assets/christmas.jpeg"
import famretreat2 from "../../assets/praiseandworship.jpeg"
import glow from "../../assets/glow.jpeg"
import believe from "../../assets/believe.jpeg"




const Values = () => {
    const features = [
        {
            title: "FAITH IN GOD",
            icon: <UserOutlined />,
            image: Confrence,
            color: "#2ecc71",
            description:
                "Smartwave Academy offers personalized career assessment tests to individuals of all ages...",
        },
        {
            title: "BELIEF IN HIS WORD",
            icon: <GlobalOutlined />,
            image: Schedule1,
            color: "#e74c3c",
            description:
                "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
        },
        {
            title: "LOVE IN ACTION",
            icon: <GlobalOutlined />,
            image: Schedule2,
            color: "#e74c3c",
            description:
                "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
        }, {
            title: "EMBRACING MISSION",
            icon: <GlobalOutlined />,
            image: lighthouse,
            color: "#e74c3c",
            description:
                "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
        }, {
            title: "EQUIPPING THE CHRISTIAN",
            icon: <GlobalOutlined />,
            image: gowomen,
            color: "#e74c3c",
            description:
                "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
        }, {
            title: "PPRAYING WITH EXPECTATION",
            icon: <GlobalOutlined />,
            image: famretreat,
            color: "#e74c3c",
            description:
                "Navigating the complexities of studying abroad is made easy with Smartwave Academy...",
        },


    ];

    return (
        <SectionContainer>
            <motion.h2
                className="mt-2 mb-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                OUR VALUES
            </motion.h2>
            {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Upcoming events of our ministry
      </motion.p> */}
            <FeaturesGrid>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.00,
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        {/* <IconContainer style={{ color: feature.color }}>
              
              <img src={feature.image} alt="" />
            </IconContainer> */}
                        {/* <Description>{feature.description}</Description> */}
                        <img src={feature.image} alt="" width={"250px"} />
                        <CardTitle>{feature.title}</CardTitle>
                    </FeatureCard>
                ))}

                {/* <div style={{marginTop:'200px'}}>
          More Events coming soon …
        </div> */}
            </FeaturesGrid>
            <div className="mt-5">
                <h4>'Lighthouse' is a project of 'Desperate for Him (Christ)' team, Canada.</h4>
            </div>
            <div>
                <h6 style={{color:'gray', marginTop:50}}>To know more about our partner in India, click on the link:</h6>
                <a href="https://desperateforhim.org" style={{color:'black', textDecoration:"none", fontSize:'20px'}} target="_blank"><h6>Desperate for Him, India</h6></a>
            </div>
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
    max-width: 500px;
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

const FeatureCard = styled(motion(Card))`
  width: 100%;
  max-width: 320px;
  min-width: 250px;
  border-radius: 12px;
  background: white;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
  justify-content: center;
  justify-items: center;
`;

const CardTitle = styled.h3`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export default Values;
