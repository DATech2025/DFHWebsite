import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <Container>
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="vision-card">
            <IconWrapper>
              <FaEye size={40} color="#e63950" />
            </IconWrapper>
            <h1>VISION STATEMENT</h1>
            <p>
              As a ministry founded and based on Biblical principles, we partner with
              and rely on the Holy Spirit of God in producing an environment for God
              to manifest His fullness so that every individual will be personified
              with the Christ-like attitude.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="mission-card">
            <IconWrapper>
              <FaBullseye size={40} color="#2ecc71" />
            </IconWrapper>
            <h1>MISSION STATEMENT</h1>
            <MissionList>
              <li>To encourage and help people to be 'living witnesses' in their daily life situations and also wherever they are.</li>
              <li>To raise leaders who will in turn be God's channels in raising other leaders. (To be salt and light).</li>
              <li>To raise intercessors who stand in the gap for their community, nation, and the world.</li>
              <li>To impact the young and old through media and literature so that the fragrance of Christ would have a lasting impact on them.</li>
              <li>To be a home for the lost and the broken which would even result in the transformation of an entire community.</li>
            </MissionList>
          </Card>
        </motion.div>
      </SectionWrapper>
    </Container>
  );
};

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  padding: 60px 24px;
  background: #f9f9f9;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  padding: 40px 35px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.className?.includes('vision') 
      ? 'linear-gradient(135deg, #e63950, #ff6b81)' 
      : 'linear-gradient(135deg, #2ecc71, #27ae60)'};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #1a1a2e;
    margin: 15px 0 20px;
    letter-spacing: 1px;
  }

  p {
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    color: #555;
    line-height: 1.8;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 25px;

    h1 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 25px 20px;

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(230, 57, 80, 0.08);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const MissionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    font-size: clamp(0.95rem, 1.1vw, 1.05rem);
    color: #555;
    line-height: 1.8;
    padding: 10px 0 10px 30px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #2ecc71;
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 8px 0 8px 25px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 6px 0 6px 20px;
    }
  }
`;

export default VisionMission;