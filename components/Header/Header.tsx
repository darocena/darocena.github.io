
import styled from 'styled-components';
export interface HeaderProps {
  headerText?: string;
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
  padding: 0.2rem;
  text-align: center;
`;