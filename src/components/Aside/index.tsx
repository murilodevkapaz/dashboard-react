import React, { useState } from 'react';
import Toggle from '../Toggle';
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    Container,
    LogImg,
    MenuContainer,
    Header,
    MenuItemLink,
    MenuItemButton,
    Title,
    ToggleMenu,
    ThemeToggleFooter   
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toogleMenuIsOpened, setToogleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);



    const handleToggleMenu = () => {
        setToogleMenuIsOpened(!toogleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toogleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toogleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <LogImg src={logoImg} alt="Logo da Minha Carteira" />
                <Title>MinhaCarteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/"><MdDashboard />Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entry-balance"><MdArrowUpward />Entradas</MenuItemLink>
                <MenuItemLink href="/list/exit-balance"><MdArrowDownward />Saídas</MenuItemLink>
                <MenuItemButton onClick={signOut}><MdExitToApp />Sair</MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toogleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}

                />
            </ThemeToggleFooter>
        </Container>
    )
}

export default Aside;