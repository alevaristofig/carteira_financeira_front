import { ReactElement, useState, SubmitEvent , useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { transferir } from "../../redux/operacao/slice";

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

const CadastroTransferencia = (): ReactElement => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [carteira,setCarteira] = useState<number>();
    const [valor,setValor] = useState<number>();
    const [descricao] = useState<string>('');
    const [tipo_operacao] = useState<string>('transferência');
    const [status] = useState<string>('aprovado');
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {            
            navigate('/login');
        } 

        setLoading(true);
    },[]);

    const cadastrar = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(transferir({
            'carteira': carteira,
            'tipo_operacao': tipo_operacao,
            'descricao': descricao,
            'valor': valor,
            'status': status,            
        }));

        setTimeout(() => {
            navigate(`/operacao/${sessionStorage.getItem('id')}`);       
        },7000);
    }

    return(
        <>
            <Cabecalho />
            <div className='d-flex mt-3'>
                <Menu />
                {
                    loading
                    ?
                        <div className="spinner-border text-primary mt-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    :
                        ''
                }
                <div className="container-fluid">
                    <Form onSubmit={cadastrar}>
                        <Card>
                            <Card.Body>
                                <Form.Group className='mb-4'>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                            <Form.Label>Carteira*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setCarteira(parseInt(e.target.value))}
                                                value={carteira}
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                            <Form.Label>Valor*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setValor(parseInt(e.target.value))}
                                                value={valor}
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Button type='submit'>Transferir</Button>
                                </Form.Group> 
                            </Card.Body>
                        </Card>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default CadastroTransferencia;