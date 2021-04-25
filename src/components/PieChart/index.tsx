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

const PieChartC : React.FC = ()=>(
    <Container>
        <SideLeft>
            <LegendContainer>
            <Legend color="#F7931B">
                <h2>Relação</h2>
                <div>5%</div>
                <span>Entradas</span>
            </Legend>

            <Legend color="#E44C4E">
                <div>95%</div>
                <span>Saídas</span>
            </Legend>
            </LegendContainer>
        </SideLeft>
        
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie 
                        data={[amount: 30, percent: 95]}
                        labelLine = {false}
                        dataKey = "percent"
                    >
                        {}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default PieChartC;