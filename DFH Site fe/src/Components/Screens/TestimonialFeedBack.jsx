// src/components/Testimonials.js
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/bg_for_feedback.jpg';

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  margin-top: 90px;
  column-gap: 10%;
  transition: all 0.3s ease-in-out;
  max-width: 100%;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
    column-gap: 0;
    width: 100%;
  }
`;

function TestimonialFeedBack() {
  return (
    <HeroSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h1 className="mb-4 text-center text-white">What People Say</h1>
        <div className="row">
          {testimonials.map(({ id, name, feedback, desc }) => (
            <div className="col-md-6 mb-4" key={id}>
              <div className="card h-100 shadow-sm radious-5">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-left">{name}</h4>
                  <h6 className="card-title text-left">{desc}</h6>
                  <p className="card-text text-muted text-center">"{feedback}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HeroSection>
  );
}

export default TestimonialFeedBack;

const testimonials = [
  {
    id: 1,
    name: "Donald Boyd",
    desc: "Interim Pastor Calvary EMCC",
    feedback:
      "I have been serving at Calvary Church in Owen Sound as Interim Pastor for approximately a year now. It has been a joy for me to get to know Paul and his wife, Sharmila. I have found them both to be sincere and active followers of Christ. They are members of the church and share a good reputation among our people. The call of God on Paul's life is obvious to me. I know that he is regularly involved in a variety of ministries; outreach among the poor and homeless in our city, radio programming into India, and assisting with a feeding program for the impoverished children in the same country, hosting and leading Bible Studies and Prayer Meetings in their home (As Covid allows), as well as helping at our church on a regular basis. Paul has chosen to only work less than full-time at his employment (¾ or 0.8 time, I believe) so that he has more time to devote to ministry. In their basement, Paul has set up a whole recording studio where he creates teaching programs, primarily to be broadcast overseas and hosts spiritual gatherings.",
  },
  {
    id: 2,
    name: "Rev.Mary M. Turner",
    desc: "Lead Pastor",
    feedback:
      "To Whom It May Concern: I have had the privilege of having Paul Ernest in my congregation at Calvary Evangelical Missionary Church for five years. It is with absolute confidence and a great respect that I submit this letter of endorsement for him. When he arrived here at Calvary, he started a house group that quickly grew. Paul serves as an elder, has a pastor's heart and is filled with the Holy Spirit. He is a man of prayer, integrity, honour and wisdom. He is an anointed man of God which is evident when he preaches. I offer my complete endorsement for consideration in any future ministry and/or employment endeavours for which he may apply. Any church/ministry would be blessed beyond measure to have Paul in their employ. If you require any further information please contact me at marymkb@gmail.com Sincerely,",
  },
];
