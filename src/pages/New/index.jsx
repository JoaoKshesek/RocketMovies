import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonBack } from '../../components/ButtonBack';
import { MovieItem } from '../../components/MovieItem';


import { Container, Form, Markers, Buttons } from "./styles";

export function New() {
    return(
        <Container>
            <Header />
            
            
            <Link to="/"><ButtonBack /></Link>
            <main>
                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input placeholder="Titulo" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Markers>
                        <h2>Marcadores</h2>
                        <div className="tags">
                            <MovieItem value="React" />
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </Markers>

                    <Buttons>
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </Buttons>
                </Form>
            </main>
        </Container>
    )
}