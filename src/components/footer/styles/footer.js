import styled from 'styled-components/macro';

export const Container = styled.div`
    max-width: 1000px;
    padding: 70px 45px 0;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 50px 5% 0;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a`
    font-size: 1.3rem;
    color: #737373;
    margin-bottom: 20px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 1.6rem;
    color: #737373;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 1.3rem;
    color: #737373;
    margin: 20px 0;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;
