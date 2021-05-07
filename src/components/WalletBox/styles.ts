import styled from 'styled-components';

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0;
    background-color: ${props=>props.color};
    color: ${props=>props.theme.colors.white};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    //o que tem dentro do container
    >img{
        position: absolute;
        height: 110%;
        top: -10px;
        right: -30px;
        opacity: .3;
    }

    >span{
        font-size: 18px;
        font-weight: 500;
    }

    >small{
        font-size: 12px;
        position: absolute;
        border: 10px;
    }

    @media(max-width: 770px){
        >span{
            font-size: 14px;
        }
        >h1{
            word-wrap: break-word;
            font-size: 22px;
            >strong{
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;
        h1{
            display: flex;
            font-size: 24px;
            
            strong{
                position: initial;
                width: 100%;
                font-size: 22px;
            }
            strong:after{
                display: inline-block;
                content: ' ';
                width: 1px;
            }
        }
    }
`;