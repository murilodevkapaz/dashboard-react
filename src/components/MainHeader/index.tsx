import React, {useMemo} from 'react';

import {Container, Profile, Welcome, UserName} from './styles';
import emojis from '../../utils/emojis';
// import Toggle from '../Toggle';

const MainHeader: React.FC = () => {

    const emoji = useMemo(()=>{

        const i = Math.floor(Math.random()*emojis.length);
        return emojis[i];
    }, []);

    return (
        <Container>
            {/* <Toggle /> */}
            <h1>MainHeader</h1>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Murilo Rerison</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;