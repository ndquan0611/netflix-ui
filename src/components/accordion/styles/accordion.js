import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 70px 45px;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0.8rem;
    text-align: center;
    color: #fff;

    @media (max-width: 600px) {
        font-size: 2.6rem;
    }
`;

export const Frame = styled.div`
    width: 75%;
    max-width: 815px;
    margin: 52px auto;
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 8px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: 1px;
    padding: 0.8em 2.2em 0.8em 1.2em;
    background-color: #303030;
    user-select: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Body = styled.div`
    font-size: 26px;
    text-align: left;
    font-weight: 400;
    line-height: normal;
    padding: 1.2em;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }
    @media (max-width: 600px) {
        font-size: 2rem;
        line-height: 22px;
    }
`;
