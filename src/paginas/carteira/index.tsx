import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";
import { buscar } from "../../redux/carteira/slice";

import Table from 'react-bootstrap/Table';
import Button  from 'react-bootstrap/Button';

import { PiNotePencilLight } from "react-icons/pi";

import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

const Carteira = (): ReactElement => {

    const dispatch = useDispatch();
    const { loading, carteiras } = useSelector((state: RootState) => state.carteira);
    const navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {            
            navigate('/login');
        } 

        setTimeout(() => {
            dispatch(buscar({
                'id': sessionStorage.getItem('id')
            }));        
        },400);
        
    },[]);

    const formatarData = (data: string) => {
        const dataFormatada = new Date(data);

        const dataExibicao = dataFormatada.toLocaleString("pt-BR");

        return dataExibicao.replace(',','');
    }

    return(
        <>
            <Cabecalho />
            <div className='d-flex mt-3'>
                <Menu />                                             
                 <div className="container-fluid">                    
                    {
                        loading
                        ?
                            <div className="spinner-border text-primary mt-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        :
                             carteiras.length === 0
                             ?
                                <>
                                    <Button as="a" href="cadastrocarteira" variant="primary">Cadastrar</Button>
                                    <div className='me-2 float-start w-100'>
                                        Não existem dados para exibir
                                    </div>
                                </>
                             :
                                <Table className="responsive striped bordered hover">
                                    <thead>
                                        <tr>                                            
                                            <th scope='col'>Numero</th>                        
                                            <th scope='col'>Titular</th>
                                            <th scope='col'>Saldo</th>                                                                                           
                                            <th scope='col'>Data</th>                                                                                      
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {                                                                                                                              
                                            carteiras.map((p: any,i: number) => 
                                            (
                                                    <tr key={p['id']}>                                                        
                                                        <td>{p['numero']}</td>
                                                        <td>{p['titular']}</td>
                                                        <td>{p['saldo'].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>                                                                                                               
                                                        <td>{formatarData(p['created_at'])}</td>                                                                          
                                                    </tr>
                                                ))
                                        }
                                    </tbody>
                                </Table>
                    }
                 </div>
            </div>
        </>
    )
}

export default Carteira; 