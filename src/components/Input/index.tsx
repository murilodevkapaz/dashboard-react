import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

//criando uma interface que irá receber elementos de um input
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

//pega todas as propriedades do input
const Input: React.FC<IInputProps> = ({ ...rest }) => (
    <React.Fragment>
        <Container {...rest} />
    </React.Fragment>
)

export default Input;