import React from 'react';
import styled from 'styled-components';

const ImageCarouselContainer = styled.div`
  margin-top: 50px;
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #ddd;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SlideTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  width: 100%;
`;

const SlideTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const SlideText = styled.p`
  margin: 10px 0 0;
  font-size: 18px;
`;

const ImageCarousel = () => {
  return (
    <ImageCarouselContainer>
      <SlideContainer>
        <SlideImage src="/slide1.jpg" alt="Slide 1" />
        <SlideTextContainer>
          <SlideTitle>Slide 1</SlideTitle>
          <SlideText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SlideText>
        </SlideTextContainer>
      </SlideContainer>
      <SlideContainer>
        <SlideImage src="/slide2.jpg" alt="Slide 2" />
        <SlideTextContainer>
          <SlideTitle>Slide 2</SlideTitle>
          <SlideText>Nullam luctus quam eu nunc maximus tristique.</SlideText>
        </SlideTextContainer>
      </SlideContainer>
      <SlideContainer>
        <SlideImage src="/slide3.jpg" alt="Slide 3" />
        <SlideTextContainer>
          <SlideTitle>Slide 3</SlideTitle>
          <SlideText>Suspendisse rhoncus justo eu lacus malesuada, sed consectetur urna auctor.</SlideText>
        </SlideTextContainer>
      </SlideContainer>
    </ImageCarouselContainer>
  );
};

export default ImageCarousel;
