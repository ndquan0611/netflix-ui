import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) =>
            src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
        top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    padding: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        padding: 0 45px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1450px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    max-width: 100px;
    height: fit-content;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 7px 17px;
    border-radius: 3px;
    color: #fff;
    background-color: #e50914;
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: #f40612;
    }
`;
