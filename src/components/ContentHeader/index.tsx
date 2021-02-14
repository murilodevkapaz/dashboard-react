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

    return (
        <Container >
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}{/*componente selectInput*/}
            </Controllers>
        </Container>

    )
}

export default ContentHeader