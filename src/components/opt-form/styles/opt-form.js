import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    max-width: 950px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 70px;
    max-width: 500px;
    padding: 10px 10px 0;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000;
    border-radius: 2px;
    border: 1px solid #8c8c8c;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    &:focus {
        border-color: #0071eb;
    }

    @media (max-width: 1000px) {
        height: 48px;
        margin: 10px auto;
        font-size: 1.4rem;
    }
`;

export const Button = styled.button`
    height: 70px;
    padding: 0 30px;
    font-size: 3rem;
    font-weight: 400;
    background-color: #e50914;
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 2px;
    border-left: 1px solid #333;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    user-select: none;
    cursor: pointer;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        margin-left: 10px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    @media (max-width: 1000px) {
        height: 40px;
        font-size: 1.6rem;
        padding: 0 16px;

        img {
            width: 18px;
        }
    }
`;

export const Text = styled.h3`
    font-size: 2rem;
    padding-bottom: 20px;
    color: #fff;
    font-weight: 400;

    @media (max-width: 1000px) {
        padding: 10px 10%;
        font-size: 1.8rem;
    }
`;
