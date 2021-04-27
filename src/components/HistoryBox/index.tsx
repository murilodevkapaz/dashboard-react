import React from 'react';
import {
    Container,
    ChartContainer,
    Header,
    LegendContainer,
    Legend

} from './styles';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

interface IHistoryBox {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    LineColorAmountEntry: string;
    LineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBox> = ({
    data, LineColorAmountEntry, LineColorAmountOutput
}) => (
    <Container>
        <ChartContainer>
            <Header>
                <h2>Histórido de saldo</h2>
                <LegendContainer>
                    <Legend color={LineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </Legend>

                    <Legend color={LineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={LineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                    <Line
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={LineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;