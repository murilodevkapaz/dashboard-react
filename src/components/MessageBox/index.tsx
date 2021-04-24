import React from 'react';
import {Content} from './styles';
import happyImg from '../../assets/happy.svg';

interface ImessageBoxProps {
    title: string;
    description: string;
    footerTest: string;
    icon: string;
}


const MessageBox: React.FC<ImessageBoxProps> = ({
    title, 
    description,
    footerTest,
    icon
})=>{

    return (
        <Content>
            <header>
                <h1>
                    {title} <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
                <footer>{footerTest}</footer>
            </header>
        </Content>
    )

}

export default MessageBox;