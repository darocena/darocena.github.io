import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

const ArticleCard = styled.div`
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

const ArticleImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const ArticleTitle = styled.h2`
  margin: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const ArticleText = styled.p`
  margin: 20px;
  font-size: 16px;
  color: #666;
`;

interface Article {
  title: string;
  text: string;
  imageUrl: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard key={article.title}>
          <ArticleImage src={article.imageUrl} alt={article.title} />
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleText>{article.text}</ArticleText>
        </ArticleCard>
      ))}
    </Container>
  );
};

export default ArticleList;
