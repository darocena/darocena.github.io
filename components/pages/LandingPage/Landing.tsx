import Article, { articleData } from "@/components/Article/Article";
import CardList from "@/components/CardList/CardList";
import { articleList } from "@/components/CardList/articles";
import Carousel from "@/components/Carousel/Carousel";
import { CarouselData } from "@/components/Carousel/CarouselData";
import FlipCardsGrid from "@/components/FlipCardGrid/FlipCardGrid";
import { flipCards } from "@/components/FlipCardGrid/flipCards";
import React from "react";


const Landing = () => {
    return (
        <>
        <Carousel slides={CarouselData} />
        <Article
          title={articleData.title}
          text={articleData.text}
          image={articleData.image}
        />
        <FlipCardsGrid flipCards={flipCards} />
        <CardList articles={articleList} />
    </>
    );
    }

export default Landing
