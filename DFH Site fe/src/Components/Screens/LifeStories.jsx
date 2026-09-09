import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaTimes, FaUserCircle } from "react-icons/fa";
import Paul from "../../assets/Paul.jpg";
import Sharmila from "../../assets/Sharmila.jpg";
import magesh from "../../assets/magesh.jpg";
import Aju from "../../assets/Aju.jpg";
import Tim from "../../assets/Tim.jpg";

const stories = [
  {
    id: 1,
    name: "Paul Ernest Dayalan",
    role: "Co-founder",
    image: Paul,
    description: "Privileged to be a child of the true God. Met Christ at a crucial period of his life when he was around 14 years old. Christ filled Paul with His Holy Spirit and transformed his life (previously a failure, spiritually a weak person, withdrawn, not confident and low self esteem) and elevated him in different facets of his life, raised him to be a testimony and enabled him to experience God's pleasant presence, relationship and friendship in an intimate way. God has been using him since 1998 to bless and transform many. He is one of the Co-founders of this ministry. Currently married to Sharmila Ernest and living with their three kids. All credit to Christ who enables!",
    verse: "I can do all things through Christ who strengthens me. - Philippians 4:13"
  },
  {
    id: 2,
    name: "Sharmila Ernest",
    role: "Co-founder",
    image: Sharmila,
    description: "A child of God who loves Him very dearly. Met Christ in a special way during her days in the university around the year 2003. God has blessed her with talents and a heart to be instrumental in lives being transformed. Good at conducting groups, discussions, games, activities and delivering talks to inspire/support people. God has also used her to lead people into intercession. Lives with her husband Paul Ernest Dayalan and three kids.",
    verse: "She is clothed with strength and dignity; she can laugh at the days to come. - Proverbs 31:25"
  },
  {
    id: 3,
    name: "Magesh Anand Doraisamy",
    role: "Core Team",
    image: magesh,
    description: "I was born and brought up in a Hindu family but in a Christian neighborhood. I had the opportunity to know Bible and Christ Jesus from my early life. I learned more about God / Jesus through self learning and attending small groups where we had the opportunity to discuss, debate and learn more about God and His word from the Bible. I believe that God loves us, but for us to truly understand God and His ways, we too should love God and follow Him and His ways in all walks of our life.",
    verse: "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5"
  },
  {
    id: 4,
    name: "Aju Varghese",
    role: "Core Team",
    image: Aju,
    description: "Before meeting Christ in a personal way, I remember living a life not close to God and in sin; I found myself to be a part of a wrong group of friends and had avoided even going to church. Upon meeting Christ, my life changed and the Holy Spirit of God filled me and transformed my life. I then started praying and then observed having a positive vibe in my life. God started elevating me step by step in different areas of my life and I had more of a peaceful mind. God used me to share God's word and to worship Him more. I am married to a wonderful wife and am currently working in a bank. I feel God's presence and leading in my life.",
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17"
  },
  {
    id: 5,
    name: "Tim Jackson",
    role: "Core Team",
    image: Tim,
    description: "I grew up in a very religious family. All this time I searched for God's love and the truth. When I needed Him the most, Jesus was there to pull me out of the destructive life I was in. I was invited to a church led by the Holy Spirit of God, where I was physically healed and also set free from alcohol. The first thing the pastor said was: Jesus said 'I am the truth, the life and the way.' I had finally found the truth and the love of Christ JESUS!!",
    verse: "Then you will know the truth, and the truth will set you free. - John 8:32"
  }
];

const LifeStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (story) => {
    setSelectedStory(story);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedStory(null);
    document.body.style.overflow = "unset";
  };

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Our Life Stories</Title>
        <Subtitle>
          "Let your light so shine before men, that they may see your good works 
          and glorify your Father in heaven." 
          <br />
          <span style={{ fontWeight: 400 }}>— Matthew 5:16</span>
        </Subtitle>
      </motion.div>

      <StoriesGrid>
        {stories.map((story, index) => (
          <StoryCard
            key={story.id}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
            onClick={() => openModal(story)}
          >
            <CardImageWrapper>
              <CardImage src={story.image} alt={story.name} />
              <CardOverlay>
                <span>📖 Read Story</span>
              </CardOverlay>
            </CardImageWrapper>
            <CardContent>
              <CardName>{story.name}</CardName>
              <CardRole>{story.role}</CardRole>
              <CardPreview>
                {story.description.slice(0, 120)}...
              </CardPreview>
              <ReadMore>Click to read full story →</ReadMore>
            </CardContent>
          </StoryCard>
        ))}
      </StoriesGrid>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>
                <FaTimes size={24} />
              </CloseButton>

              <ModalHeader>
                <ModalImageWrapper>
                  <ModalImage src={selectedStory.image} alt={selectedStory.name} />
                </ModalImageWrapper>
                <ModalInfo>
                  <ModalName>{selectedStory.name}</ModalName>
                  <ModalRole>{selectedStory.role}</ModalRole>
                </ModalInfo>
              </ModalHeader>

              <ModalBody>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <ModalDescription>{selectedStory.description}</ModalDescription>
                <QuoteIconRight>
                  <FaQuoteRight />
                </QuoteIconRight>
              </ModalBody>

              {selectedStory.verse && (
                <ModalVerse>
                  <span>✝</span> {selectedStory.verse}
                </ModalVerse>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  padding: 100px 24px 60px;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8edf2 100%);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 70px 12px 30px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
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
`;

const Subtitle = styled.h5`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: #555;
  max-width: 700px;
  margin: 25px auto 10px;
  font-weight: 500;
  line-height: 1.8;
  font-style: italic;

  span {
    font-style: normal;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1300px;
  margin: 40px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 20px auto;
  }
`;

const StoryCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;

  @media (max-width: 480px) {
    border-radius: 16px;
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: #f0f0f0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${StoryCard}:hover & {
    transform: scale(1.08);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  span {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.5);
    padding: 12px 24px;
    border-radius: 30px;
    backdrop-filter: blur(4px);
    letter-spacing: 1px;
  }

  ${StoryCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 0.7;

    span {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }
`;

const CardContent = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const CardName = styled.h3`
  font-size: clamp(1.1rem, 1.2vw, 1.3rem);
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
`;

const CardRole = styled.p`
  font-size: clamp(0.8rem, 0.9vw, 0.9rem);
  color: #e63950;
  font-weight: 600;
  margin: 0 0 10px;
`;

const CardPreview = styled.p`
  font-size: clamp(0.85rem, 0.9vw, 0.95rem);
  color: #666;
  line-height: 1.6;
  margin: 0 0 10px;
`;

const ReadMore = styled.p`
  font-size: clamp(0.8rem, 0.9vw, 0.85rem);
  color: #e63950;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;

  ${StoryCard}:hover & {
    color: #c0392b;
  }
`;

// ===== MODAL STYLES =====

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
    align-items: flex-start;
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 50px;
  }
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 24px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  cursor: default;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e63950;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    border-radius: 20px;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
    max-height: 80vh;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 12px;
  float: right;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(4px);
  margin: 12px 12px 0 0;

  &:hover {
    background: rgba(230, 57, 80, 0.9);
    transform: rotate(90deg) scale(1.1);
  }

  @media (max-width: 768px) {
    top: 8px;
    width: 36px;
    height: 36px;
    margin: 8px 8px 0 0;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 16px 16px 0;
    gap: 12px;
  }
`;

const ModalImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid #e63950;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  flex: 1;
`;

const ModalName = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
`;

const ModalRole = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: #e63950;
  font-weight: 600;
  margin: 4px 0 0;
`;

const ModalBody = styled.div`
  padding: 20px 24px;
  position: relative;

  @media (max-width: 480px) {
    padding: 16px 16px;
  }
`;

const QuoteIcon = styled.div`
  color: #e63950;
  font-size: 2rem;
  opacity: 0.2;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const QuoteIconRight = styled.div`
  color: #e63950;
  font-size: 2rem;
  opacity: 0.2;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ModalDescription = styled.p`
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  color: #444;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const ModalVerse = styled.div`
  background: linear-gradient(135deg, #fdf2f4, #fce8eb);
  padding: 16px 24px;
  margin: 0 24px 24px;
  border-radius: 12px;
  border-left: 4px solid #e63950;
  font-size: clamp(0.95rem, 1vw, 1rem);
  color: #1a1a2e;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.5rem;
    font-style: normal;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    margin: 0 16px 16px;
    font-size: 0.85rem;

    span {
      font-size: 1.2rem;
    }
  }
`;

export default LifeStories;