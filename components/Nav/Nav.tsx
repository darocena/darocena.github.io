import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
    return (
        <NavContainer>
            <StyledLink href="/">
                Home
            </StyledLink>
            <StyledLink href="/about">
                About
            </StyledLink>
            <StyledLink href="/contact">
                Contact
            </StyledLink>
    </NavContainer>
    )
    }

    const NavContainer = styled.nav`
        background-color: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 1;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        @media (max-width: 480px) {
            flex-direction: column;
        }

        @media (max-width: 320px) {
            flex-direction: column;
    }

        @media (max-width: 280px) {
            flex-direction: column;
        }
    `;

    const StyledLink = styled(Link)`
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