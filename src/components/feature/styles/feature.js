import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 140px 90px;
    color: #fff;
    border-bottom: 8px solid #222;
`;

export const Title = styled.h1`
    max-width: 800px;
    margin: auto;
    font-size: 6.4rem;
    font-weight: 600;

    @media (max-width: 1000px) {
        font-size: 5rem;
    }

    @media (max-width: 600px) {
        font-size: 2.8rem;
    }
`;

export const SubTitle = styled.h2`
    max-width: 800px;
    margin: 15px auto;
    font-size: 2.6rem;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }

    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`;
