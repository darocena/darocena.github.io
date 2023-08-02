import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  align-self: center;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ArticleTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ArticleBody = styled.p`
  font-size: 2rem;
  height: 100%;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ArticleImage = styled.img`
  margin-top: 2rem;
  width: 20%;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  //make the image responsive
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 480px) {
    width: 50%;
  }

  @media (max-width: 320px) {
    width: 70%;
  }

  @media (max-width: 280px) {
    width: 80%;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    cursor: default;
  }
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-width: 480px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 320px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 280px) {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  @media (max-width: 240px) {
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
  
`;
