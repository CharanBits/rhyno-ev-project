import React from 'react';
import styled from 'styled-components';
import { FaAndroid, FaApple } from 'react-icons/fa';

const RentalsPage = styled.div`
  background-color: #f8f9fa;
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top:120px;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #252525;
  font-weight :bold;
`;

const Description = styled.p`
  font-size: 1.5em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
`;

const DownloadLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    background-color: #131313;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #252525;
    }
  }
`;

const IconWrapper = styled.span`
  margin-left: 8px;
  font-size: 1.5em;
`;

const Rentals = () => {
  return (
    <RentalsPage>
      <ContentWrapper>
        <Title>Rentals</Title>
        <Description>
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
          <br />
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        </Description>
        <DownloadLinks>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Download our rental app: Android
            <IconWrapper>
              <FaAndroid />
            </IconWrapper>
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Apple
            <IconWrapper>
              <FaApple />
            </IconWrapper>
          </a>
        </DownloadLinks>
      </ContentWrapper>
    </RentalsPage>
  );
};

export default Rentals;
