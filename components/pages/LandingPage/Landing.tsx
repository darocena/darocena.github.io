import Article, { articleData } from "@/components/Article/Article";
import CardList from "@/components/CardList/CardList";
import { articleList } from "@/components/CardList/articles";
import Carousel from "@/components/Carousel/Carousel";
import { CarouselData } from "@/components/Carousel/CarouselData";
import FlipCardsGrid from "@/components/FlipCardGrid/FlipCardGrid";
import { flipCards } from "@/components/FlipCardGrid/flipCards";
import React from "react";
import styled from "styled-components";

//create a grid container styled component for the article
const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 1rem;
  //make the grid responsive
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;



const Landing = () => {
    return (
        <>
        <Carousel slides={CarouselData} />
        <ArticlesContainer>
        <Article
          title={articleData[0].title}
          text={articleData[0].text}
          image={articleData[0].image}
        />
        <Article
          title={articleData[1].title}
          text={articleData[1].text}
          image={articleData[1].image}
        />
        </ArticlesContainer>
        <FlipCardsGrid flipCards={flipCards} />
        <CardList articles={articleList} />
    </>
    );
    }

export default Landing
