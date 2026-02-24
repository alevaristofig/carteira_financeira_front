import { ReactElement, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import axios from 'axios';


const Cabecalho = (): ReactElement => {

    const navigate = useNavigate();

    const [loading,setLoading] = useState<boolean>(false);

     const logout = () => {
        setLoading(true);

        axios.get(`http://localhost:8000/api/carteira/logout`,{
            headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`                  
                     }
            })         
            .then(() => {                                			 
			    sessionStorage.removeItem('token');
			    sessionStorage.removeItem('id');

			    navigate('/login', {replace: true});
          })
          .catch((erro) => {
              toast.error('Ocorreu um erro e a operação não foi realizada');                  
          });
     }

     return (
        <>
             <Navbar bg='primary' className='menu_superior'>
                <div>
                    <ToastContainer />
                </div>
                {
                    loading
                    ?
                        <div className="spinner-border text-primary mt-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    :
                        ''
                }
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