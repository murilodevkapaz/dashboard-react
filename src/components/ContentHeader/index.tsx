import React from 'react';
import {
    Container,
    TitleContainer,
    Controllers
} from './styles';


const ContentHeader :React.FC = ()=>{
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <button>botao1</button>
                <button>botao2</button>
            </Controllers>
        </Container>

    )
}

export default ContentHeader