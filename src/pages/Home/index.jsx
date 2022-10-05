import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Brand, NewMovie, Content } from './styles';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Section } from '../../components/Section';






export function Home(){
    return(
        <Container>
            <Header />
            <Brand>
                <h1>Meus filmes</h1>

                <NewMovie>
                    <Link to="/new">
                        <FiPlus />
                        Adicionar filme
                    </Link>
                </NewMovie>
            </Brand>
            <Content>
                <Section title="Interestellar">
                
                    <p>Teste</p>
                    <Tag title="Ficção Científica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                </Section>
                <Section title="Interestellar">
                
                    <Tag title="Ficção Científica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                </Section>
            </Content>
        </Container>
    )
}