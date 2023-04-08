import React, { useState } from 'react';
import styled from 'styled-components';

interface CardProps {
  isFlipped: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  perspective: 1000px;
    margin: 20px;
`;

const Card = styled.div<CardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  padding: 0 20px;
`;

export interface FlipCardProps {
    id: number;
    frontImg: string;
    title: string;
    description: string;
}

const FlipCard = ({ id,frontImg, title, description }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <Container>
      <Card isFlipped={isFlipped} onClick={handleFlip}>
        <Front style={{ backgroundImage: `url(${frontImg})` }} />
        <Back>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Back>
      </Card>
    </Container>
  );
}

export default FlipCard;
