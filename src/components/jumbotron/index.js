import React from 'react';
import { Container, Inner } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction} {...restProps}>
            <p>Hello Again</p>
        </Inner>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
