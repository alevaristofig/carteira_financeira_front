import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { RootState } from "../../redux/root-reducer";
import { listar } from "../../redux/operacao/slice";

import Table from 'react-bootstrap/Table';

import { PiNotePencilLight } from "react-icons/pi";

import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

const Operacao = (): ReactElement => {

    const dispatch = useDispatch();
    const { loading, operacoes } = useSelector((state: RootState) => state.operacao);
    const navigate = useNavigate();

    const IconeEditar = PiNotePencilLight as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

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
                             operacoes.length === 0
                             ?
                                <div className='me-2 float-start w-100'>
                                    Não existem dados para exibir
                                </div>
                             :
                                <Table className="responsive striped bordered hover">
                                    <thead>
                                        <tr>
                                            <th scope='col'>Carteira Id</th>                        
                                            <th scope='col'>Descrição</th>
                                            <th scope='col'>Valor</th> 
                                            <th scope='col'>Status</th>                                               
                                            <th scope='col'>Data</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            operacoes.map((p: any,i: number) => 
                                            (
                                                    <tr key={p['id']}>                                                        
                                                        <td>{p['carteria_id']}</td>
                                                        <td>{p['descricao']}</td>
                                                        <td>{p['valor'].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td> 
                                                        <td>{p['status']}</td>                                                        
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

export default Operacao; 