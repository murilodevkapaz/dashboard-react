import React from 'react';
import { Content } from './styles';
import ContentHeader from '../ContentHeader';

interface ISelectInputProps {
    options: {
        value: string | number; //pode ser number ou texto
        label: string | number;
    }[], //vai ser uma lista
}


//recebe uma interface
const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
    return (
        <Content>
            <select>
                {
                    options.map(option=>(
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Content>
    )
}

export default SelectInput;


