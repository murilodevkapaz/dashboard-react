import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '.././pages/dashboard';
import List from '.././pages/list';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
        </Switch>
    </Layout>
)

export default AppRoutes;