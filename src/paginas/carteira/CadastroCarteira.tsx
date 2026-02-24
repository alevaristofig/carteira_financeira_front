import { ReactElement, useState, SubmitEvent , useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { salvar } from "../../redux/carteira/slice";

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

const CadastroCarteira = (): ReactElement => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [numero,setNumero] = useState<number>();
    const [titular,setTitular] = useState<string>();
    const [saldo] = useState<number>(0);
    const [valorNegativo] = useState<number>(0);

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {            
            navigate('/login');
        } 
        
    },[]);

    const cadastrar = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch(salvar({
            'user_id': sessionStorage.getItem('id'),
            'numero': numero,
            'titular': titular,
            'saldo': saldo,
            'valorNegativo': valorNegativo
        }));

        setTimeout(() => {
            navigate('/carteira');       
        },7000);
    }

    return(
        <>
            <Cabecalho />
            <div className='d-flex mt-3'>
                <Menu />
                <div className="container-fluid">
                    <Form onSubmit={cadastrar}>
                        <Card>
                            <Card.Body>
                                <Form.Group className='mb-4'>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                             <Form.Label>Titular*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setTitular(e.target.value)}
                                                value={titular}
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                             <Form.Label>Número da Carteira*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setNumero(parseInt(e.target.value))}
                                                value={numero}
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

export default CadastroCarteira;