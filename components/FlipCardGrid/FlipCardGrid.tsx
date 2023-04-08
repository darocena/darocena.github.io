import React from 'react';
import styled from 'styled-components';
import FlipCard, { FlipCardProps } from '../FlipCard/FlipCard';


interface FlipCardsGridProps {
  flipCards: FlipCardProps[];
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const FlipCardsGrid: React.FC<FlipCardsGridProps> = ({ flipCards }) => {
  return (
    <GridContainer>
      {flipCards.map(({ id, frontImg, title, description }) => (
        <FlipCard key={id} frontImg={frontImg} title={title} description={description} id={id} />
      ))}
    </GridContainer>
  );
};

export default FlipCardsGrid;