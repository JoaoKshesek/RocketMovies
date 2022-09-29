import { Container, Profile } from './styles';
import { Input } from "../../components/Input";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input 
                placeholder="Pesquise pelo título"
            />
            <Profile to="/profile">
                <div>
                    <strong>João Valter Kshesek</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/JoaoKshesek.png"/>
            </Profile>

        </Container>
    )
}