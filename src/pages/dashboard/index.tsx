import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';


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
    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch (e) {
            throw new Error('invalid month value. Is accept 0 - 24.');
        }
    }


    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setMonthSelected(parseYear);
        }
        catch (e) {
            throw new Error('invalid year value. Is accept integer numbers');
        }
    }

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                }
                catch (e) {
                    throw new Error('Invalid amount! Amount must be number');
                }
            }
        })

        return total;
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                }
                catch (e) {
                    throw new Error('Invalid amount! Amount must be number');
                }
            }
        })

        return total;

    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;


    }, [totalGains, totalExpenses]);//são as dependencias que serão escutadas, quando os dois mudare executa de novo

    const message = useMemo(() => {
        if (totalBalance > 0) {
            return {
                title: "Muito Bem",
                description: "Sua carteira está positiva!",
                footerTest: "Continue assim. Considere investir no seu saldo",
                icon: happyImg
            }
        }
        else if(totalBalance === 0) {
            return {
                title: "Ufa!!",
                description: "Neste mês você gastou exatamente o que guanhou",
                footerTest: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Que triste! ",
                description: "Neste mês, você gastou mais do que deveria!",
                footerTest: "Tente gastar os gastos desnecessários",
                icon: sadImg
            }
        }
    }, [totalBalance])

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

        return Array.from(uniqYears).map(year => {
            return {
                value: year,
                label: year,
            }
        })
    }, []);

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
            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="dollar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerTest={message.footerTest}
                    icon={message.icon}
                />

                <PieChart />
            </Content>
        </Container>
    )
}

export default Dashboard;