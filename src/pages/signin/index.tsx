//libraries
import React, { useState } from 'react';

//components
import {
    Container,
    Logo,
    Form,
    FormTitle
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

//images
import logoImg from '../../assets/logo.svg';

//hooks
import {useAuth} from '../../hooks/auth';


//FC
const Signin: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {signIn} = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h3>Minha Carteira</h3>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>
                <Input
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    )
}

export default Signin;