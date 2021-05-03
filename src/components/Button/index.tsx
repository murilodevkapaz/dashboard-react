import React,{ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

//criando uma interface que irá receber elementos de um input
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

                                    //pega todas as propriedades do Button
const Button: React.FC<IButtonProps> = ({children, ...rest})=>(
    <Container {...rest}>
        {children}
    </Container>
)

export default Button;