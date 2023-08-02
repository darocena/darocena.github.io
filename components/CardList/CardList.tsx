import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 15%;
  height: 600px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 450px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const CardText = styled.p`
  margin: 20px;
  font-size: 16px;
  color: #666;
`;

interface Card {
  title: string;
  text: string;
  imageUrl: string;
}

interface CardListProps {
  articles: Card[];
}

const CardList = ({ articles }: CardListProps) => {
  return (
    <Container>
      {articles.map((article) => (
        <Card key={article.title}>
          <CardImage src={article.imageUrl} alt={article.title} />
          <CardTitle>{article.title}</CardTitle>
          <CardText>{article.text}</CardText>
        </Card>
      ))}
    </Container>
  );
};

export default CardList;
