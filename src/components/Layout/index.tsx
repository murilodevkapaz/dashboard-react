import React from 'react';

import {Container} from './styles';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content/>
        </Container>
    )
}

export default Layout;