import React from "react";
import styled from "styled-components";

import Header from "../../Header/Header";
import Nav from "../../Nav/Nav";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AuthorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const AuthorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const AuthorName = styled.h2`
  font-size: 24px;
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom: 10px;
`;

const AuthorQuote = styled.p`
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;
const authorPhotoUrl = "https://i.pinimg.com/736x/0b/2d/ae/0b2dae8928e178f368b6d152a1367b7f--cats-meowing-kitty-cats.jpg";
const AboutPage = () => {
  return (<>
    <Container>
      
      <AuthorMessageContainer>
        <AuthorImage src={authorPhotoUrl} alt="Author" />
        <AuthorName>John Doe</AuthorName>
        <AuthorQuote>
          &quot;The future belongs to those who believe in the beauty of their
          dreams.&quot;
        </AuthorQuote>
      </AuthorMessageContainer>
    </Container>
    </>
  );
};

export default AboutPage;
