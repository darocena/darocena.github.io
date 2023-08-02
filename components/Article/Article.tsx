import React from "react";
import {
  ArticleContainer,
  ArticleImage,
  ArticleTitle,
  ArticleBody,
  Button,
} from "./Article.styled";

interface ArticleProps {
  title: string;
  text: string;
  image: string;
}

export const articleData = {
  title: "Bobby The Cat",
  text: `Plutos a planet. That just sounds like slavery with extra steps. You
  ask alotta questions Morty, not very charismatic of you. That's because
  losers look stuff up while the rest of us are carp'en all them 'diems.
  Don't even trip about your pants, dawg. We got an extra pair right here.
  Well look where being smart got you. Yea and I made the stars that
  became the carbon in your mothers ovaries! It probably has space aids.
  Whose kidneys are these? You don't have to try to impress me Morty. 5
  more minute of this and I'm going to get mad! What are you looking at,
  mother fucker! Sometimes science is a lot more art, than science. A lot
  of people don't get that. First off, I always slay it, queen. Secondly,
  yes. Dont look at me! That guy over there roped me into this. That's
  Right Morty! This is gonna be a lot like that. Except you know. It's
  gonna make sense.`,
  image:
    "https://i.pinimg.com/736x/0b/2d/ae/0b2dae8928e178f368b6d152a1367b7f--cats-meowing-kitty-cats.jpg",
};

const Article = ({ title, text, image }: ArticleProps) => {
  return (
    <ArticleContainer>
      <ArticleImage src={image} />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleBody>
        {text}
        <Button>Learn More</Button>
      </ArticleBody>
    </ArticleContainer>
  );
};

export default Article;
