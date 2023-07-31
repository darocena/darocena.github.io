import react from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';

export interface PageContainerProps {
    children: react.ReactNode;
}

            

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`;
const PageContainer = ({children}:PageContainerProps) => {
    return (
        
        <Container>
            {children}
        </Container>
    
    );
};

export default PageContainer;