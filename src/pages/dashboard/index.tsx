import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

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


    //hooks
    // const handleMonthSelected = (month: string) => {
    //     try {
    //         const parseMonth = Number(month);
    //         setMonthSelected(parseMonth);
    //     }
    //     catch (e) {
    //         throw new Error('invalid month value. Is accept 0 - 24.');
    //     }
    // }


    // const handleYearSelected = (year: string) => {
    //     try {
    //         const parseYear = Number(year);
    //         setMonthSelected(parseYear);
    //     }
    //     catch (e) {
    //         throw new Error('invalid year value. Is accept integer numbers');
    //     }
    // }

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

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Entradas",
                value: totalGains?totalGains:0,
                percent: percentGains?percentGains:0,
                color: "#E44C4E"

            },
            {
                name: "Saídas",
                value: totalExpenses?totalExpenses:0,
                percent: percentExpenses?percentExpenses:0,
                color: "#F7931B"

            }
        ]

        return data;

    }, [totalGains, totalExpenses])

    const historyData = useMemo(() => {
        let dataChart = (listOfMonths.map((_, month) => {

            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    }
                    catch {
                        throw new Error("AmountEntry is invalid. It must be valid number.")
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount);
                    }
                    catch {
                        throw new Error("AmountOutput is invalid. It must be valid number.")
                    }
                }
            });
            const data = {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }

            return data;
        })
            .filter(item => {
                const currentMonth = new Date().getMonth();

                return item.monthNumber <= currentMonth;
            })
        )

        return dataChart;
    }, [yearSelected])

    const relationExpensevesRecurrentVersusEventual = useMemo(()=>{
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter(expense=>{
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month= date.getMonth()+1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach(expense=>{
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }
            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const recurrentPercent = Number(((amountRecurrent/total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual/total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent? recurrentPercent:0,
                color: "#F7931B"
            },
            {
                name: 'Eventual',
                amount: amountEventual,
                percent: eventualPercent?eventualPercent:0,
                color: "#E44C4E"
            },
        ];
    },[monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(()=>{
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter(gain=>{
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month= date.getMonth()+1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach(gain=>{
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }
            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });

        
        const total = amountRecurrent + amountEventual;

        const recurrentPercent = Number(((amountRecurrent/total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual/total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? eventualPercent: 0, 
                color: "#F7931B"
            },
            {
                name: 'Eventual',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent:0,
                color: "#E44C4E"
            },
        ];
    },[monthSelected, yearSelected])

    const message = useMemo(() => {
        if (totalBalance > 0) {
            return {
                title: "Muito Bem",
                description: "Sua carteira está positiva!",
                footerTest: "Continue assim. Considere investir no seu saldo",
                icon: happyImg
            }
        }
        else if(totalBalance === 0 && totalExpenses === 0){
            return {
                title: "Ops!",
                description: "Neste mês, não há registro de entradas ou saídas",
                footerTest: "Parece que você não fez nenhum registro no mês/ano selecionado",
                icon: grinningImg
            }
        }
        else if (totalBalance === 0) {
            return {
                title: "Ufa!!",
                description: "Neste mês você gastou exatamente o que guanhou",
                footerTest: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro",
                icon: grinningImg
            }
        }

        else {
            return {
                title: "Que triste! ",
                description: "Neste mês, você gastou mais do que deveria!",
                footerTest: "Tente gastar os gastos desnecessários",
                icon: sadImg
            }
        }
    }, [totalBalance, totalGains, totalExpenses])

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

                <PieChart data={relationExpensesVersusGains} />

                <HistoryBox
                    data={historyData}
                    LineColorAmountEntry="#F7931B"
                    LineColorAmountOutput="#E44C4E"
                />

                <BarChartBox
                    title="Saídas"
                    data={relationExpensevesRecurrentVersusEventual}
                /> 

                <BarChartBox
                    title="Entradas"
                    data={relationGainsRecurrentVersusEventual}
                /> 
            </Content>
        </Container>
    )
}

export default Dashboard;