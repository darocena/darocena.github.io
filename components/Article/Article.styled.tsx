import styled from "styled-components";

//Create button component
export const Button = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  margin: auto;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  margin-top: 2rem;
`;
//Create article title component
export const ArticleTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;
//Create article body component
export const ArticleBody = styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

//Create article image component
export const ArticleImage = styled.img`
  //make the image one quarter of its original size
    width: 25%;
    height: 25%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    //make the image a circle
    border-radius: 50%;
    //make the image centered
    display: block;
    margin-left: auto;
    margin-right: auto;
    
`;
//Create article container component, image and text next to each other, button bellow the text
export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #000;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  font-size: 8rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding-left: 7rem;
  padding-right: 7rem;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  //Make the text centered
  text-align: center;
`;