import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 3.5vw;
    text-align: center;
    font-weight: 500;
    margin: 0.67em 0;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export const Name = styled.p`
    color: grey;
    margin: 0.6em 0;
    font-size: 1.8rem;
    text-overflow: ellipsis;

    &:hover {
        color: #e5e5e5;
    }
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    border: 0.3em solid transparent;
    cursor: pointer;
    display: block;

    &:hover {
        border-color: #e5e5e5;
    }
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    &:hover > ${Picture} {
        border: 3px solid white;
    }
    &:hover ${Name} {
        color: white;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;
