import React, {useState} from 'react';
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import {useAuth} from '../../hooks/auth';

import {
    Container,
    LogImg,
    MenuContainer,
    Header,
    MenuItemLink,
    MenuItemButton,
    Title,
    ToggleMenu
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    const [toogleMenuIsOpened, setToogleMenuIsOpened] = useState(false);

    const {signOut} = useAuth();

    const handleToggleMenu = ()=>{
        setToogleMenuIsOpened(!toogleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toogleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toogleMenuIsOpened?<MdClose />:<MdMenu />}
                </ToggleMenu>
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