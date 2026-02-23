import { ReactElement } from "react";
import { NavLink } from 'react-router-dom';
import { PiMathOperationsThin } from "react-icons/pi";
import { FaPlusSquare } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = (): ReactElement => {
    const IconeOperacoes = PiMathOperationsThin as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const IconeDeposito = FaPlusSquare as unknown as React.FC<React.SVGProps<SVGSVGElement>>;  
    const IconeCarteira = FaWallet as unknown as React.FC<React.SVGProps<SVGSVGElement>>; 
    const IconeTransferencia = FaMinusSquare as unknown as React.FC<React.SVGProps<SVGSVGElement>>; 

    return(
        <>
            <div className='menu_esquerdo list-group float-start'>
                <NavLink to='/carteira' className='list-group-item list-group-item-action mb-3'>
                    <IconeCarteira fontSize={24} color='blue' /> Carteira
                </NavLink>
                <NavLink to={`/operacao/${sessionStorage.getItem('id')}`} className='list-group-item list-group-item-action mb-3'>
                    <IconeOperacoes fontSize={24} color='blue' /> Operaçoes
                </NavLink>
                <NavLink to='/operacao/deposito' className='list-group-item list-group-item-action mb-3'>
                    <IconeDeposito fontSize={24} color='blue' /> Depósito
                </NavLink>
                <NavLink to='/operacao/transferencia' className='list-group-item list-group-item-action mb-3'>
                    <IconeTransferencia fontSize={24} color='blue' /> Transferência
                </NavLink>
            </div>
        </>
    )
}

export default Menu; 