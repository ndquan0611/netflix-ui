import styled from 'styled-components/macro';

export const Inner = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;
    height: auto;
    overflow: hidden;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.95rem;
    margin-bottom: 0.65rem;

    @media (max-width: 600px) {
        font-size: 18px;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    overflow: hidden;
`;

export const Item = styled.div`
    display: flex;
    padding: 70px 45px;
    border-bottom: 8px solid #222;
    color: #fff;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 50px 5%;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;
