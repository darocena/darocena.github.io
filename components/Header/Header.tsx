
//Create a Header component with Next.js and styled-components
import styled from 'styled-components';
//create interface for the Header component with a prop of headerText
interface HeaderProps {
  headerText: string;
}

const Header = ({headerText}: HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{headerText}</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;