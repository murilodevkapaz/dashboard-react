import React from 'react';
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md'

import {useAuth} from '../../hooks/auth';

import {
    Container,
    LogImg,
    MenuContainer,
    Header,
    MenuItemLink,
    MenuItemButton,
    Title
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    const {signOut} = useAuth();

    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo da Minha Carteira" />
                <Title>MinhaCarteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/"><MdDashboard/>Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entry-balance"><MdArrowUpward/>Entradas</MenuItemLink>
                <MenuItemLink href="/list/exit-balance"><MdArrowDownward/>Saídas</MenuItemLink>
                <MenuItemButton onClick={signOut}><MdExitToApp/>Sair</MenuItemButton>
            </MenuContainer>
        </Container>
    )
}

export default Aside;