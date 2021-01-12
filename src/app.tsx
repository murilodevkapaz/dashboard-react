import React from 'react';
import Dashboard from './pages/dashboard';
import GlobalStyles from './styles/globalStyles';


const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Dashboard />
        </React.Fragment>
    )
}

export default App;