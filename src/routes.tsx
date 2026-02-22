import { createBrowserRouter } from "react-router-dom";

import CadastroUsuario from "./paginas/Usuario/CadastroUsuario";
import Carteira from "./paginas/carteira";
import CadastroCarteira from "./paginas/carteira/CadastroCarteira";
import EditarCarteira from "./paginas/carteira/EditarCarteira";
import Operacao from "./paginas/operacao";
import CadastroDeposito from "./paginas/operacao/CadastroDeposito";
import CadastroTransferencia from "./paginas/operacao/CadastroTransferencia";

const router = createBrowserRouter([
    {
        path: '/cadastrousuario',
        element: <CadastroUsuario />
    },
    {
        path: '/carteira',
        element: <Carteira />
    },
    {
        path: '/cadastrocarteira',
        element: <CadastroCarteira />
    },
    {
        path: '/editarcarteira/:id',
        element: <EditarCarteira />
    },
    {
        path: '/operacao/:id',
        element: <Operacao />
    },
    {
        path: '/operacao/deposito',
        element: <CadastroDeposito />
    },
    {
        path: '/operacao/transferencia',
        element: <CadastroTransferencia />
    },
]);

export { router }