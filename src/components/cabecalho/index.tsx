import { ReactElement, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import axios from 'axios';


const Cabecalho = (): ReactElement => {

     const logout = () => {}

     return (
        <>
             <Navbar bg='primary' className='menu_superior'>
                <div>
                    <ToastContainer />
                </div>
                <Container>
                    <div className='col-7 text-end'><h3 className='text-white'>Carteira Financeira</h3></div>
                </Container>
                {
                    sessionStorage.getItem('token') !== null
                    ?
                        <button className="btn btn-light me-2" onClick={() => logout()}>Sair</button>
                    :
                        ''
                }
             </Navbar>
        </>
     )
}

export default Cabecalho; 