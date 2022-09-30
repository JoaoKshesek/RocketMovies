import { FiPlus } from 'react-icons/fi';

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
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
            </Brand>
            <Content>
                <Section>

                    <Tag title="Drama"/>
                </Section>
            </Content>
        </Container>
    )
}