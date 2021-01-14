import React from 'react';
import {Container, ToggleLabel, ToggleSelector } from './styles';
import { Component } from 'react';

interface Iprops{

}

class Tog extends Component {
    constructor(props:Iprops) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(checked:boolean) {
        this.setState({ checked });
      }

    render(){
        return(
            <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={this.handleChange} 
                checked={this.state.checked}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
        )
    }
}

const Toggle : React.FC = ()=>{

    return (
    <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector 
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={()=>console.log("sad")} 
        checked
    />
    <ToggleLabel>Dark</ToggleLabel>
</Container>
    )
}

export default Toggle;