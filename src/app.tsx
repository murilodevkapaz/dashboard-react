import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyles from './styles/globalStyles';


import {useTheme} from './hooks/theme';

//o ThemeProvider escolhe qual o tema da página usando o arquivo 'styled.d.ts' e definindo os temas dark e light

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;