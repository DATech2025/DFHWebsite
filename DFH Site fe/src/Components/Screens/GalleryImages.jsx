import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bloom1 from "../../assets/Gallery/bloom1.jpeg"
import ScrollGallery from "./ScrollGallery";

const hackathons = [
    {
        id: 1,
        image: bloom1,
    },
];

const GalleryImages = () => {
    return (
        <Container>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Photo Gallery
            </motion.h1>
            {/* <Grid>
                {hackathons.map((hackathon, index) => (
                    <motion.div
                        key={hackathon.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <Card>
                            <img src={hackathon.image} alt={hackathon.title} />
                            <RegisterButton>Open</RegisterButton>
                        </Card>
                    </motion.div>
                ))}
            </Grid> */}
            {/* <Grid>
                <motion.div
                    // key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                // transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    <div style={{width: 300, height: 300, overflow: "hidden"     }}>
                        <img
                            // onClick={openModel}
                            src={bloom1}
                            alt="123"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </motion.div>
            </Grid> */}

            <ScrollGallery />
        </Container>
    );
};

export default GalleryImages;

const Container = styled.div`
  text-align: center;
  padding: 60px 10%;
  background: #f4f7fc;
  color: #333;
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1a2a6c;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 5px 0;
  }
`;

const RegisterButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s;

  &:hover {
    background: #e63946;
  }
`;
