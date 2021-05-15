import styled from 'styled-components';
import ToogleComponent from '../Toggle';

export const Container  = styled.div`
    grid-area: MH;
    /* color: ${props=> props.theme.colors.white}; */
    background-color: ${props =>props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props=>props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props=>props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

