import React from 'react';
import {Container, Content} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinancecard from '../../../src/components/HistoryFinanceCard';


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
            <Content>
                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                                <HistoryFinancecard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>

    )
}

export default List;