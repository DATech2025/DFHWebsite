import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";
import Paul from "../../assets/Paul.jpg";
import Sharmila from "../../assets/Sharmila.jpg";
import magesh from "../../assets/magesh.jpg";
import Aju from "../../assets/Aju.jpg";
import Tim from "../../assets/Tim.jpg";



// import workshop1 from "./images/workshop1.jpg";
// import workshop2 from "./images/workshop2.jpg";
// import workshop3 from "./images/workshop3.avif";

const workshops = [
  {
    // id: "frontend",
    title: "Paul Ernest Dayalan",
    // instructor: "John Doe",
    // date: "April 15, 2025",
    // duration: "3 Hours",
    image: Paul,
    description:
      "Privileged to be a child of the true God. Met Christ at a crucial period of his life when he was around 14 years old. Christ filled Paul with His Holy Spirit and transformed his life (previously a failure, spiritually a weak person, withdrawn, not confident and low self esteem ) and elevated him in different facets of his life, raised him to be a testimony and enabled him to experience God’s pleasant presence, relationship and friendship in an intimate way. God has been using him since 1998 to bless and transform many. He is one of the Co-founders of this ministry. Currently married to Sharmila Ernest and living with their three kids. All credit to Christ who enables!",
  },
  //   {
  //     id: "cloud",
  //     title: "Mastering Cloud Infrastructure",
  //     instructor: "Jane Smith",
  //     date: "April 20, 2025",
  //     duration: "4 Hours",
  //     // image: workshop2,
  //     description:
  //       "Deep dive into AWS, Azure, and GCP. Learn how to deploy and scale applications effectively.",
  //   },
  {
    // id: "frontend",
    title: "Sharmila Ernest",
    // instructor: "John Doe",
    // date: "April 15, 2025",
    // duration: "3 Hours",
    image: Sharmila,
    description:
      "A child of God who loves Him very dearly. Met Christ in a special way during her days in the university around the year 2003. God has blessed her with talents and a heart to be instrumental in lives being transformed. Good at conducting groups, discussions, games, activities and delivering talks to inspire/support people. God has also used her to lead people into intercession. Lives with her husband Paul Ernest Dayalan and three kids.",
  },
  {
    // id: "frontend",
    title: "Magesh Anand Doraisamy",
    // instructor: "John Doe",
    // date: "April 15, 2025",
    // duration: "3 Hours",
    image: magesh,
    description: "“I was born and brought up in a Hindu family but in a Christian neighborhood. I had the opportunity to know Bible and Christ Jesus from my early life. I learned more about God / Jesus through self learning and attending small groups where we had the opportunity to discuss, debate and learn more about God and His word from the Bible. I believe that God loves us, but for us to truly understand God and His ways, we too should love God and follow Him and His ways in all walks of our life.”"
  }, {
    // id: "frontend",
    title: "Aju Varghese",
    // instructor: "John Doe",
    // date: "April 15, 2025",
    // duration: "3 Hours",
    image: Aju,
    description:
      " “Before meeting Christ in a personal way, I remember living a life not close to God and in sin; I found myself to be a part of a wrong group of friends and had avoided even going to church. Upon meeting Christ, my life changed and the Holy Spirit of God filled me and transformed my life. I then started praying and then observed having a positive vibe in my life. God started elevating me step by step in different areas of my life and I had more of a peaceful mind. God used me to share God’s word and to worship Him more. I am married to a wonderful wife and am currently working in a bank. I feel God’s presence and leading in my life.” "
  },
  {
    // id: "frontend",
    title: "Tim Jackson",
    // instructor: "John Doe",
    // date: "April 15, 2025",
    // duration: "3 Hours",
    image: Tim,
    description:
      " “I grew up in a very religious family. All this time I searched for God’s love and the truth. When I needed Him the most, Jesus was there to pull me out of the destructive life I was in. I was invited to a church led by the Holy Spirit of God, where I was physically healed and also set free from alchohol.  ",
    description1:
      "The first thing the pastor said was: Jesus said ” I am the truth, the life and the way.” I had finally found the truth and the love of Christ JESUS !! “"
  },
];

const LifeStories = () => {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Life Stories
      </motion.h1>
      <h5>Let your light so shine before men, that they may see your good works and glorify your Father in heaven. Mat 5:16</h5>
      <WorkshopList>
        {workshops.map((workshop, index) => (
          <motion.div
            key={workshop.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <WorkshopCard>
              <ImageBox>
                <img src={workshop.image} alt={workshop.title} />
              </ImageBox>
              <Content>
                {/* <Icon>
                  <FaChalkboardTeacher />
                </Icon> */}
                <h2>{workshop.title}</h2>
                <h4>{workshop.instructor}</h4>
                <p>{workshop.description}</p>
                <p>{workshop.description1}</p>

                {/* <Details>
                  <span>Date: {workshop.date}</span>
                  <span>Duration: {workshop.duration}</span>
                </Details> */}
                {/* <RegisterButton>Register Now</RegisterButton> */}
              </Content>
            </WorkshopCard>
          </motion.div>
        ))}
      </WorkshopList>
    </Container>
  );
};

export default LifeStories;

const Container = styled.div`
  padding: 60px 10%;
  text-align: center;
  background: linear-gradient(to right, #eef2f3, #d9e2ec);
  margin-top: 100px;
`;

const WorkshopList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;
`;

const WorkshopCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  text-align: left;
  flex: 1;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #333;
  }

  h4 {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #e63946;
  margin-bottom: 15px;
`;

const Details = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1rem;
  color: #444;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const RegisterButton = styled.button`
  background: #e63946;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e66940;
  }
`;
