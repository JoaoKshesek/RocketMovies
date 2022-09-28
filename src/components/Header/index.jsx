import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/JoaoKshesek.png"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>João Valter Kshesek</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}