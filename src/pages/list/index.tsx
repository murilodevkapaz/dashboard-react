import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinancecard from '../../../src/components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth()+1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);//no colchete fica escutando se algo mudar (o que for colocado lá), se nã colocar nada, ele executa apenas uma vez

    const lineColor = useMemo(() => {
        //se for estritamente igual a entry-balancy retorna o tipo e usa como{lineColor}
        return type === 'entry-balance' ? '#F7931B' : '#E44C43';
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type])

    const months = [
        {
            value: 1, label: 'Janeiro'
        },
        {
            value: 2, label: 'Fevereiro'
        },
        {
            value: 3, label: 'Março'
        },
        {
            value: 4, label: 'Abril'
        },
        {
            value: 5, label: 'Maio'
        },
        {
            value: 6, label: 'Junho'
        },
        {
            value: 7, label: 'Julho'
        },
        {
            value: 8, label: 'Agosto'
        },
        {
            value: 9, label: 'Setembro',
        },
        {
            value: 10, label: 'Outubro'
        },
        {
            value: 11, label: 'Novembro'
        },
        {
            value: 12, label: 'Dezembro'
        },
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

    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth()+1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData  = filteredDate.map(item=>{
            return {
                id: String(Date.now()),
                description: item.description,
                amountFormatted: formatCurrency(item.amount),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente'?'#4E41F0': '#E44C4E'
            }
        });

        setData(formattedData);
    }, [listData, monthSelected, yearSelected, data.length]);
    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput 
                    options={months} 
                    onChange={e=>setMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={e=>setYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
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
                {
                    data.map(item => (
                        <HistoryFinancecard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }


            </Content>
        </Container>

    )
}

export default List;