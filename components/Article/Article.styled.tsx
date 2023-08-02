import styled from "styled-components";

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
export const ArticleTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;
export const ArticleBody = styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ArticleImage = styled.img`
    margin-top: 2rem;
    width: 15%;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
`;

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
  text-align: center;
`;