import React from 'react';
import {
    Container,
    Legend,
    SideLeft,
    SideRight,
    LegendContainer
} from './styles';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';

interface IPiechartProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];//retorna um array de objetos
}

const PieChartC: React.FC<IPiechartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <LegendContainer>
                {
                    data.map(indicator => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map(indicator => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container >
);

export default PieChartC;