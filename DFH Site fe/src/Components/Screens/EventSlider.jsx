import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaVideo, FaChalkboardTeacher } from "react-icons/fa";
// import webinar1 from "./images/webinar1.jpg";
// import webinar2 from "./images/webinar2.jpg";
// import webinar3 from "./images/webinar3.jpg";
// import webinar4 from "./images/webinar4.jpg";

const webinars = [
  {
    id: 1,
    title: "Lighthouse",
    speaker: "Regular Friday evening Fellowship:",
    date: "April 14th 2023 To June 30th 2023",
    time: "6:00 PM IST",
    description:
      "| Summer break Fall session begins with a potluck on September 15th 2023 To Nov 24th 2023 (last Friday of Nov) ",
    icon: <FaVideo />,
    // image: webinar1,
    registerLink: "#",
    venue:  "Paul and Sharmila’s 1137, 14th Ave east, Owen Sound", 
    details: "Every Friday Time: 6pm Locking forward to see you all!"
  },
  {
    id: 2,
    title: "DH Conference/retreat:",
    speaker: "",
    date: "",
    time: "9:30am to 4pm",
    description: "June 17th 2023 (we need your help with arranging this)",
    icon: <FaChalkboardTeacher />,
    // image: webinar2,
    registerLink: "#",
    venue:  "will be informed in flyer", 
    details: "Child care provided; Lunch and coffee, RSVP; 2 guest speakers"
  },
  {
    id: 3,
    title: "'Go Woman'- A Women's conference",
    speaker:"",
    date: "Oct 21st 2023",
    time: "",
    description:"",
    icon: <FaVideo />,
    // image: webinar3,
    registerLink: "#",
    venue:  "Calvary EMC, Owen Sound. Time: 9am to Noon RSVP; Guest speakers", 
    details: ""
  },
  {
    id: 4,
    title: "Christmas Dinner:",
    speaker: "",
    date: "Dec 2nd 2023",
    time: "",
    description:"Carols, Kids program and dinner at ‘X change",
    icon: <FaChalkboardTeacher />,
    // image: webinar4,
    registerLink: "#",
    venue:  "", 
    details: ""
  },
  {
    id: 5,
    title: "New year's Eve watch night service",
    speaker: "",
    date: "Dec 31st 2023",
    time: "",
    description:"(31st Dec) 10pmto 1am (Jan 1st)",
    icon: <FaChalkboardTeacher />,
    // image: webinar4,
    registerLink: "#",
    venue:  "", 
    details: ""
  },
];

const Webinars = () => {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Regular events and year schedule:
      </motion.h1>
      <WebinarGrid>
        {webinars.map((webinar, index) => (
          <motion.div
            key={webinar.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <WebinarCard>
              {/* <WebinarImage> */}
                {/* <img src={webinar.image} alt={webinar.title} /> */}
              {/* </WebinarImage> */}
              <WebinarContent>
                {/* <Icon>{webinar.icon}</Icon> */}
                <h2 className="text-center">{webinar.title}</h2>
                <h4>{webinar.speaker}</h4>
                <p>{webinar.description}</p>
                <h5>
                  Date: {webinar.date} | Time: {webinar.time}
                </h5>
                <h5>
                  Venue : {webinar.venue} 
                </h5>
                <h5>
                    {webinar.details}
                </h5>
                {/* <RegisterButton href={webinar.registerLink}>
                  Register Now
                </RegisterButton> */}
              </WebinarContent>
            </WebinarCard>
          </motion.div>
        ))}
      </WebinarGrid>
      <WebinarGrid>
          <motion.div
            // key={webinar.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <WebinarCard>
              {/* <WebinarImage> */}
                {/* <img src={webinar.image} alt={webinar.title} /> */}
              {/* </WebinarImage> */}
              <WebinarContent>
                {/* <Icon>{webinar.icon}</Icon> */}
                <h2 className="text-center">Activities we conduct:</h2>
                <ul className="text-center list-unstyled p-2">
                  <li><h4>House prayer cells- weekly</h4></li>
                  <li><h4>Praise and Worship evenings</h4></li>
                  <li><h4>Spiritual Retreats </h4></li>
                  <li><h4>‘Go Woman’ conferences for women</h4></li>
                  <li><h4>Leadership training.</h4></li>
                  <li><h4>Intercessory prayers.</h4></li>
                  <li><h4>Youth ministry</h4></li>
                  <li><h4>Children Ministry</h4></li>
                  <li><h4>Visiting preacher to strengthen believers/churches.</h4></li>
                  <li><h4>Outreach programs</h4></li>
                  <li><h4>Literature and media ministry</h4></li>
                </ul>
                {/* <h4>{webinar.speaker}</h4>
                <p>{webinar.description}</p>
                <h5>
                  Date: {webinar.date} | Time: {webinar.time}
                </h5>
                <h5>
                  Venue : {webinar.venue} 
                </h5>
                <h5>
                    {webinar.details}
                </h5> */}
                {/* <RegisterButton href={webinar.registerLink}>
                  Register Now
                </RegisterButton> */}
              </WebinarContent>
            </WebinarCard>
          </motion.div>
      </WebinarGrid>
    </Container>
  );
};

export default Webinars;

const Container = styled.div`
  padding: 60px 10%;
  text-align: center;
  background: linear-gradient(to right, #f9fafb, #e3e7eb);
  margin-top: 100px;
`;

const WebinarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 30px;
`;

const WebinarCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const WebinarImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WebinarContent = styled.div`
  padding: 20px;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.1rem;
    color: #777;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 15px;
  }

  h5 {
    font-size: 1rem;
    color: #444;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #e63946;
  margin-bottom: 10px;
`;

const RegisterButton = styled.a`
  display: inline-block;
  background: #e63946;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #e06b1d;
  }
`;
