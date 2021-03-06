import React from 'react';
import { Container, Form, Input, Button, Text } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Form = function OptFormForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            <span>{children}</span>
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
