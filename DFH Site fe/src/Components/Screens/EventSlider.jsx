import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  FaPrayingHands, 
  FaMusic, 
  FaUsers, 
  FaFemale, 
  FaChalkboardTeacher,
  FaHands,
  FaChild,
  FaChurch,
  FaHandHoldingHeart,
  FaBookOpen,
  FaUserGraduate
} from "react-icons/fa";

const activities = [
  { 
    id: 1, 
    title: "House Prayer Cells", 
    description: "Weekly prayer meetings in homes", 
    icon: <FaPrayingHands />,
    color: "#e63950"
  },
  { 
    id: 2, 
    title: "Praise and Worship Evenings", 
    description: "Joyful gatherings of worship", 
    icon: <FaMusic />,
    color: "#f39c12"
  },
  { 
    id: 3, 
    title: "Spiritual Retreats", 
    description: "Deepening faith through focused retreats", 
    icon: <FaUsers />,
    color: "#2ecc71"
  },
  { 
    id: 4, 
    title: "Go Woman Conferences", 
    description: "Empowering women in their faith journey", 
    icon: <FaFemale />,
    color: "#e84393"
  },
  { 
    id: 5, 
    title: "Leadership Training", 
    description: "Equipping leaders for ministry", 
    icon: <FaChalkboardTeacher />,
    color: "#3498db"
  },
  { 
    id: 6, 
    title: "Intercessory Prayers", 
    description: "Standing in the gap through prayer", 
    icon: <FaHands />,
    color: "#9b59b6"
  },
  { 
    id: 7, 
    title: "Youth Ministry", 
    description: "Reaching and discipling the next generation", 
    icon: <FaUserGraduate />,
    color: "#1abc9c"
  },
  { 
    id: 8, 
    title: "Children Ministry", 
    description: "Building faith in young hearts", 
    icon: <FaChild />,
    color: "#f1c40f"
  },
  { 
    id: 9, 
    title: "Visiting Preacher Ministry", 
    description: "Strengthening believers and churches", 
    icon: <FaChurch />,
    color: "#e67e22"
  },
  { 
    id: 10, 
    title: "Outreach Programs", 
    description: "Serving communities with love", 
    icon: <FaHandHoldingHeart />,
    color: "#27ae60"
  },
  { 
    id: 11, 
    title: "Literature & Media Ministry", 
    description: "Spreading the Word through creative media", 
    icon: <FaBookOpen />,
    color: "#2980b9"
  }
];

const EventSlider = () => {
  const events = [
    {
      id: 1,
      title: "Lighthouse",
      speaker: "Regular Friday evening Fellowship:",
      date: "April 14th 2023 To June 30th 2023",
      time: "6:00 PM IST",
      description: "Summer break Fall session begins with a potluck on September 15th 2023 To Nov 24th 2023",
      venue: "Paul and Sharmila's 1137, 14th Ave east, Owen Sound",
      details: "Every Friday Time: 6pm Looking forward to see you all!"
    },
    {
      id: 2,
      title: "DH Conference/Retreat",
      date: "June 17th 2023",
      time: "9:30am to 4pm",
      description: "We need your help with arranging this",
      venue: "Will be informed in flyer",
      details: "Child care provided; Lunch and coffee, RSVP; 2 guest speakers"
    },
    {
      id: 3,
      title: "Go Woman - A Women's Conference",
      date: "Oct 21st 2023",
      time: "9am to Noon",
      venue: "Calvary EMC, Owen Sound",
      details: "RSVP; Guest speakers"
    },
    {
      id: 4,
      title: "Christmas Dinner",
      date: "Dec 2nd 2023",
      description: "Carols, Kids program and dinner at 'X change'"
    },
    {
      id: 5,
      title: "New Year's Eve Watch Night Service",
      date: "Dec 31st 2023",
      time: "10pm to 1am (Jan 1st)"
    }
  ];

  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Activities We Conduct
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Please feel free to contact us to know more about these, to participate and support us.
      </motion.h3>

      {/* Activities Grid */}
      <ActivitiesGrid>
        {activities.map((activity, index) => (
          <ActivityCard
            key={activity.id}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
          >
            <IconWrapper color={activity.color}>
              {activity.icon}
            </IconWrapper>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityDescription>{activity.description}</ActivityDescription>
          </ActivityCard>
        ))}
      </ActivitiesGrid>

      {/* Events Section */}
      <EventsSection>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Upcoming Events & Schedule
        </motion.h2>

        <EventsGrid>
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              as={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EventHeader>
                <EventTitle>{event.title}</EventTitle>
              </EventHeader>
              
              {event.speaker && (
                <EventSpeaker>{event.speaker}</EventSpeaker>
              )}
              
              {(event.date || event.time) && (
                <EventDateTime>
                  {event.date && <span>📅 {event.date}</span>}
                  {event.time && <span>🕐 {event.time}</span>}
                </EventDateTime>
              )}
              
              {event.description && (
                <EventDescription>{event.description}</EventDescription>
              )}
              
              {event.venue && (
                <EventVenue>📍 {event.venue}</EventVenue>
              )}
              
              {event.details && (
                <EventDetails>{event.details}</EventDetails>
              )}
            </EventCard>
          ))}
        </EventsGrid>
      </EventsSection>
    </Container>
  );
};

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  padding: 100px 24px 60px;
  text-align: center;
  background: linear-gradient(135deg, #f9fafb 0%, #e8edf2 100%);
  min-height: 100vh;

  h1 {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 900;
    color: #1a1a2e;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #e63950, #ff6b81);
      border-radius: 2px;
    }
  }

  h3 {
    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
    color: #666;
    max-width: 700px;
    margin: 25px auto 10px;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 70px 12px 30px;
  }
`;

// ===== ACTIVITIES GRID =====

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 40px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 20px auto;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 18px 12px;
  }

  @media (max-width: 480px) {
    padding: 14px 10px;
    border-radius: 12px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.color || '#e63950'};
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: transform 0.3s ease;
  }

  ${ActivityCard}:hover & svg {
    transform: scale(1.2) rotate(5deg);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const ActivityTitle = styled.h4`
  font-size: clamp(0.85rem, 1vw, 1rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 6px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ActivityDescription = styled.p`
  font-size: clamp(0.7rem, 0.8vw, 0.85rem);
  color: #666;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

// ===== EVENTS SECTION =====

const EventsSection = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 40px;
  border-top: 2px solid rgba(0, 0, 0, 0.06);

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #1a1a2e;
    margin-bottom: 30px;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #e63950, #ff6b81);
      margin: 10px auto 0;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    margin: 40px auto 0;
    padding-top: 30px;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 18px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border-left: 4px solid #e63950;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-left-width: 3px;
  }
`;

const EventHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`;

const EventTitle = styled.h3`
  font-size: clamp(1.1rem, 1.3vw, 1.3rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`;

const EventSpeaker = styled.h4`
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: #e63950;
  font-weight: 600;
  margin: 0 0 8px;
`;

const EventDateTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);
  color: #555;
  margin: 8px 0;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 0.8rem;
  }
`;

const EventDescription = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: #444;
  margin: 10px 0;
  line-height: 1.5;
`;

const EventVenue = styled.p`
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);
  color: #2ecc71;
  font-weight: 600;
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const EventDetails = styled.p`
  font-size: clamp(0.8rem, 0.9vw, 0.9rem);
  color: #666;
  margin: 8px 0 0;
  padding: 10px 14px;
  background: #f8f9fa;
  border-radius: 8px;
  font-style: italic;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;

export default EventSlider;