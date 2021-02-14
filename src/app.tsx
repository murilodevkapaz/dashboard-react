import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard';
import List from './pages/list';


import Layout from './components/Layout';
import GlobalStyles from './styles/globalStyles';
import dark from './styles/themes/dark';

//o ThemeProvider escolhe qual o tema da página usando o arquivo 'styled.d.ts' e definindo os temas dark e light

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />

            <Layout>
                <List />
            </Layout>
        </ThemeProvider>
    )
}

export default App;