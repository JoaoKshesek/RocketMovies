import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonBack } from '../../components/ButtonBack';

import { Container, Form } from "./styles";

export function New() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/"><ButtonBack /></Link>
                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input placeholder="Titulo" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações"/>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}