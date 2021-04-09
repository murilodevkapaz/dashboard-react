import React, { useMemo } from 'react';
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinancecard from '../../../src/components/HistoryFinanceCard';

interface IRouteParams  {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({match}) => {
    const {type}  = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance'?'Entradas': 'Saídas';
    }, [type]);//no colchete fica escutando se algo mudar (o que for colocado lá), se nã colocar nada, ele executa apenas uma vez

    const lineColor = useMemo(() => {
        //se for estritamente igual a entry-balancy retorna o tipo e usa como{lineColor}
        return type === 'entry-balance'?'#F7931B': '#E44C43';
    }, [type]);

    const months = [
        {
            value: 7, label: 'Julho'
        },
        {
            value: 8, label: 'Agosto'
        },
        {
            value: 9, label: 'Setembro',
        }
    ];
    const years = [
        {
            value: 2020, label: 2020,
        },
        {
            value: 2019, label: 2019
        },
        {
            value: 2018, label: 2018
        }
    ];


    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >Recorrentes</button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >Eventuais</button>
            </Filters>

            <Content>
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinancecard

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