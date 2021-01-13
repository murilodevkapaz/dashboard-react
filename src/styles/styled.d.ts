import 'styled-components';

/* foi feito um override no DefaultTheme*/

declare module 'styled-components' {
    export interface DefatultTheme{
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
    
            white: string;
            black: string;
            gray: string;
    
            success: string;
            info: string;
            warning: string;
        }
    
    };
}