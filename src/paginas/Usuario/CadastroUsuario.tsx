import { ReactElement, useState, SubmitEvent , useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { salvar } from "../../redux/usuario/slice";

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

import Cabecalho from "../../components/cabecalho";

const CadastroUsuario = (): ReactElement => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome,setNome] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [senha,setSenha] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);

    const cadastrar = (e: SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setLoading(true);

        dispatch(salvar({
            'nome': nome,
            'email': email,
            'senha': senha  
        }));

        setTimeout(() => {
            navigate('/login');       
        },7000);
        
    }

    return(
        <>
            <Cabecalho />
            <div className='d-flex mt-3'>               
                <div className="container-fluid">
                    {
                        loading
                        ?
                            <div className="spinner-border text-primary mt-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        :
                            ''
                    }
                    <Form onSubmit={cadastrar}>
                        <Card>
                            <Card.Body>
                                <Form.Group className='mb-4'>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                             <Form.Label>Nome*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setNome(e.target.value)}                                                
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                             <Form.Label>Email*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setEmail(e.target.value)}                                                
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                             <Form.Label>Senha*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='password' 
                                                onChange={(e) => setSenha(e.target.value)}                                               
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Button type='submit'>Salvar</Button>
                                </Form.Group> 
                            </Card.Body>
                        </Card>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default CadastroUsuario;