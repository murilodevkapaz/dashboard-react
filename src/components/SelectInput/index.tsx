import React from 'react';
import { Content } from './styles';


interface ISelectInputProps {
    options: {
        value: string | number; //pode ser number ou texto
        label: string | number;
    }[], //vai ser uma lista
    onChange    (event: React.ChangeEvent<HTMLSelectElement>):void|undefined
    defaultValue?: string|number;
    //o ? é de opcional
}


//recebe uma interface
const SelectInput: React.FC<ISelectInputProps> = ({ 
    options, 
    onChange, 
    defaultValue 
}) => {
    return (
        <Content>
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </Content>
    )
}

export default SelectInput;


