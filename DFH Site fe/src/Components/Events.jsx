import React from 'react';
import styled from 'styled-components';
import EventSlider from "./Screens/EventSlider";

const Events = () => {
  return (
    <EventsWrapper>
      <EventSlider />
    </EventsWrapper>
  );
};

const EventsWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #f9f9f9;
`;

export default Events;