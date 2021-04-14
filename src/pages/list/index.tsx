import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinancecard from '../../../src/components/HistoryFinanceCard';
import {uuid} from 'uuidv4';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>("2020");
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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


    const months = useMemo(()=>{        
        return listOfMonths.map((month, index)=>{
            return {
                value: index+1,
                label: month
            }
        })
    },[])

    const years = useMemo(()=>{        
        const uniqYears: Set<number> = new Set<number>();

        listData.forEach(item=>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            uniqYears.add(year);
        })

        return Array.from(uniqYears).map(year=>{
            return {
                value:year,
                label: year
            }
        });
    },[listData])

    const handleFrequencyClick = (frequency:string)=>{
        const alreadySelected = selectedFrequency.findIndex(item=>item===frequency);
        if(alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item=> item !== frequency);
            setSelectedFrequency(filtered);
        }
        else{                                //mantem o valor que já estava e acrescenta um valor (frequency)
            setSelectedFrequency(prev=> [...prev, frequency ]);
        } 
    }

    useEffect(() => {        
        //const { data } = pageData;

        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });



        const formattedData = filteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(item.amount),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(formattedData);
    },[listData, monthSelected, yearSelected, data.length, selectedFrequency]); 

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
                    className={`tag-filter tag-filter-recurrent 
                    ${selectedFrequency.includes('recorrente')&& 'tag-actived'}`}
                    onClick={()=> handleFrequencyClick('recorrente')}
                >Recorrentes</button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual 
                    ${selectedFrequency.includes('eventual')&& 'tag-actived'}`}
                    onClick={()=> handleFrequencyClick('eventual')}
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