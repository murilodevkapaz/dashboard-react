import React, { useState, useMemo } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

const Dashboard: React.FC = () => {
    //states
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(2020);


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

    //hooks
    const handleMonthSelected = (month: string) =>{
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(e){
            throw new Error('invalid month value. Is accept 0 - 24.');
        }
    }

    
    const handleYearSelected = (year: string) =>{
        try{
            const parseYear = Number(year);
            setMonthSelected(parseYear);
        }
        catch(e){
            throw new Error('invalid year value. Is accept integer numbers');
        }
    }

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, [])

    const years = useMemo(() => {
        const uniqYears: Set<number> = new Set<number>();

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            uniqYears.add(year);
        })

        return Array.from(uniqYears).map(year=>{
            return {
                value: year,
                label: year,
            }
        })
    },[]);

        return (
            <Container>
                <ContentHeader title="Dashboard" lineColor="#FFF">
                    <SelectInput
                        options={months}
                        onChange={e => setMonthSelected(parseInt(e.target.value))}
                        defaultValue={monthSelected}
                    />
                    <SelectInput
                        options={years}
                        onChange={e => setYearSelected(parseInt(e.target.value))}
                        defaultValue={yearSelected}
                    />
                </ContentHeader>
            </Container>
        )
    }

export default Dashboard;