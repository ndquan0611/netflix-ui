import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    min-height: 660px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.75);
    margin: auto;
    padding: 60px 68px 40px;
    margin-bottom: 90px;
`;

export const Error = styled.div`
    background-color: #e87c03;
    border-radius: 4px;
    font-size: 1.4rem;
    margin-bottom: 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 16px;
`;

export const TextSmall = styled.span`
    color: #8c8c8c;
    font-size: 13px;
    margin: 13px 0;
`;

export const Link = styled(ReachRouterLink)`
    color: #fff;
    font-size: 1.6rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background-color: #333;
    color: #fff;
    height: 50px;
    border-radius: 4px;
    font-size: 1.6rem;
    padding: 16px 20px;
    margin-bottom: 16px;
`;

export const Submit = styled.button`
    background-color: #e50914;
    color: #fff;
    height: 48px;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 4px;
    margin: 24px 0 12px;
    user-select: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;
