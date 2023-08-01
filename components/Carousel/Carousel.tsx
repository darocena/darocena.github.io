import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { CarouselData } from "./CarouselData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CarouselProps {
  slides: { image: string; title: string; text: string }[];
}

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 99%;
  margin: 24px auto;
  border-radius: 10px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselSlide = styled.div`
  flex: 1 0 100%;
  display: flex;
`;

const CarouselImage = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
`;

const CarouselContent = styled.div`
  width: 50%;
  padding: 4rem;
  background-color: #000;
`;

const CarouselTitle = styled.h2`
  margin-top: 0;
  color: #fff;
`;

const CarouselText = styled.p`
  color: #fff;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  border: solid 1px gray;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;

  &:hover {
    animation: invert 1s infinite;
  }
  @keyframes invert {
    0% {
      filter: invert(0%);
    }
    50% {
      filter: invert(100%);
    }
    100% {
      filter: invert(0%);
    }
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 1%;
`;

const RightArrow = styled(ArrowButton)`
  right: 1%;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 1%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Dot = styled.span<{ active: boolean }>`
  height: 1rem;
  width: 1rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "white" : "gray")};
  cursor: pointer;
  &:hover {
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Carousel: React.FC<CarouselProps> = ({ slides = CarouselData }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer>
      <CarouselTrack ref={trackRef}>
        {slides.map((slide, index) => (
          <CarouselSlide key={index}>
            <CarouselImage src={slide.image} alt={slide.title} />
            <CarouselContent>
              <CarouselTitle>{slide.title}</CarouselTitle>
              <CarouselText>{slide.text}</CarouselText>
            </CarouselContent>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <LeftArrow onClick={handlePrevClick}>{"<"}</LeftArrow>
      <RightArrow onClick={handleNextClick}>{">"}</RightArrow>
      <DotContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default Carousel;
