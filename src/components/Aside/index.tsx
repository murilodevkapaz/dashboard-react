import React from 'react';
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md'

import {
    Container,
    LogImg,
    MenuContainer,
    Header,
    MenuItemLink,
    Title
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo da Minha Carteira" />
                <Title>MinhaCarteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard"><MdDashboard/>Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entry-balance"><MdArrowUpward/>Entradas</MenuItemLink>
                <MenuItemLink href="/list/exit-balance"><MdArrowDownward/>Saídas</MenuItemLink>
                <MenuItemLink href="#"><MdExitToApp/>Sair</MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;