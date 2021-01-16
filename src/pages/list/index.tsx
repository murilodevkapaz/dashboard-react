import React from 'react';
import {Container} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


const List: React.FC = ()=>{
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
        <Container>
            <ContentHeader title="Saídas" lineColor="#f7931b">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>

    )
}

export default List;