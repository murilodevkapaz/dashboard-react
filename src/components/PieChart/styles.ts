import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};

    color: ${props => props.theme.colors.white};    

    border-radius: 6px;
    display: flex;

    @media(max-width: 770px){
        display: flex;  
        width: 100%;
    }

    @media(max-width: 420px){
        height: 200px;
        .recharts-responsive-container {
            margin: -20px -20px;
         }
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2{
        margin-bottom: 20px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 15px;
        margin-bottom: 7px;

        >h2{
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px){
        padding: 15px;
        margin-bottom: 7px;
    }
`;

//força passar uma cor para a Legend
export const Legend = styled.li<ILegendProps>`
        display: flex;
        align-items: center;


        margin-bottom: 7px;
        font-size: 16px;

        > div{
            background-color: ${props => props.color};
            width: 40px;
            height: 40px;
            border-radius: 5px;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
        }

        >span{
            margin-left: 5px;
        }

        @media(max-width: 1345px){
            font-size: 14px;
            margin: 3px 0;

            >div{
                height: 35px;
                width: 35px;
                line-height: 35px;
            }

            >span{
                margin-left: 7px;
            }
        }

`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 175px;
    padding-right: 15px;
    
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
    }
`;