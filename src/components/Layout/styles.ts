import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content
 */


export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto; //aside 250px
    grid-template-rows: 70px auto; // header size and auto

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh; 
    min-width: 315px;

    @media(max-width: 600px){
        grid-template-columns: 100%; 
        grid-template-rows: 70px auto; 

        grid-template-areas:
        'MH'
        'CT';
    }
`;
