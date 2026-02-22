import { ReactElement } from "react";
import { NavLink } from 'react-router-dom';
import { FcPaid } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FaWallet } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = (): ReactElement => {
    //const IconeProduto = FcPaid as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
   // const IconeCupom = FcTemplate as unknown as React.FC<React.SVGProps<SVGSVGElement>>;  
    const IconeUsuario = FaWallet as unknown as React.FC<React.SVGProps<SVGSVGElement>>;  

    return(
        <>
            <div className='menu_esquerdo list-group float-start'>
                <NavLink to='/produto' className='list-group-item list-group-item-action mb-3'>
                    <IconeUsuario fontSize={24} color='blue' /> Carteira
                </NavLink>
            </div>
        </>
    )
}

export default Menu; 