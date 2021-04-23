import React, { useMemo } from 'react';
import { Container } from './styles';
import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import CountUp from 'react-countup';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color,
}) => {

    const iconSelected = useMemo(() => {
        if (icon == 'dollar') return dollarImg;
        if (icon == 'arrowUp') return arrowUpImg;
        if (icon == 'arrowDown') return arrowDownImg;
    }, [icon]);


    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />

        </Container>
    )
}

export default WalletBox;