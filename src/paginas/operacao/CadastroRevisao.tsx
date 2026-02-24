import { ReactElement, useState, SubmitEvent , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";
import { buscar, revisar } from "../../redux/operacao/slice";

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

const CadastroRevisao = (): ReactElement => {

    const dispatch = useDispatch();
    const { operacoes } = useSelector((state: RootState) => state.operacao);
    const navigate = useNavigate();

    const [descricao,setDescricao] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {            
            navigate('/login');
        } 

        setLoading(true);

        dispatch(buscar({
            'id': sessionStorage.getItem('id')
        }));
    },[]);

    const revisarOperacao = (e: SubmitEvent<HTMLFormElement>) => {
         e.preventDefault();

         dispatch(revisar({
            'id': operacoes[0]?.['id'],
            'descricao': descricao
        }));
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
                    <Form onSubmit={revisarOperacao}>
                        <Card>
                            <Card.Body>
                                <Form.Group className='mb-4'>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                            <Form.Label>Operação*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text'                                                 
                                                value={operacoes[0]?.['tipo_operacao']}                                                
                                                disabled
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
                                                value={operacoes[0]?.['valor']}                                                
                                                disabled
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col xs={1}>
                                            <Form.Label>Descrição*:</Form.Label>                                             
                                        </Col>
                                        <Col xs={10}>
                                            <Form.Control 
                                                type='text' 
                                                onChange={(e) => setDescricao(e.target.value)}
                                                value={descricao}
                                                required
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Button type='submit'>Revisar</Button>
                                </Form.Group> 
                            </Card.Body>
                        </Card>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default CadastroRevisao;