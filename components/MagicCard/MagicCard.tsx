//Create a card similar to Magic the Gathering cards using styled components

import styled from 'styled-components';

const MagicCard = () => {
    return (
        <MagicCardContainer>
            <MagicCardInner>
                <MagicCardFront>
                    <h1>Front</h1>
                </MagicCardFront>
                <MagicCardBack>
                    <h1>Back</h1>
                </MagicCardBack>
            </MagicCardInner>
        </MagicCardContainer>
    );
};

export default MagicCard;

const MagicCardContainer = styled.div`
    shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    transform: 0.3s;
    perspective: 1000px;
    cursor: pointer;
    width: 300px;
    height: 300px;
    margin: 1rem;
    border-radius: 10px;
`;

const MagicCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

const MagicCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: red;
    color: #000;
`;

const MagicCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #000;
    color: #fff;
    transform: rotateY(180deg);
`;

//Add a height to the FlipCardInner
//     height: 100%;



