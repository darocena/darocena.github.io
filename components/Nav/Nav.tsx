//Create a navigation bar component with next.js and styled-components
import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
    return (
        <NavContainer>
            <StyledLink href="/">
                Home
            </StyledLink>
            <StyledLink href="/portfolioPage">
                About
            </StyledLink>
            <StyledLink href="/contact">
                Contact
            </StyledLink>
    </NavContainer>
    )
    }

    //Create NavContainer styled component
    const NavContainer = styled.nav`
        background-color: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const StyledLink = styled(Link)`
    //Add hover animation with transition using styled components
    //Make borders rounded with pill shape
    //Center the text
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: #000;
            background-color: #fff;
        }
        color: #fff;
        text-decoration: none;
        margin: 0 1rem;
    `;

    export default Nav;