import React from 'react';
import SelectInput from '../SelectInput';
import {
    Container,
    TitleContainer,
    Controllers
} from './styles';

interface IContentHeaderProps{
    title: string;
    lineColor: string;
    children: React.ReactNode; //recebe um component
}

                                //essa é a tipagem dele
const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor,children}) => {

    const options = [
        {
            value: 'Rodrigo', label: 'Rodrigo'
        },
        {
            value: 'Maria', label: 'Maria'
        },
        {
            value: 'Maria', label: 'Maria',
        }
    ];


    return (
        <Container >
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>

    )
}

export default ContentHeader