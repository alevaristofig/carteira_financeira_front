import { createBrowserRouter } from "react-router-dom";

import CadastroUsuario from "./paginas/Usuario/CadastroUsuario";
import Carteira from "./paginas/carteira";
import CadastroCarteira from "./paginas/carteira/CadastroCarteira";
import EditarCarteira from "./paginas/carteira/EditarCarteira";

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
        element: <CadastroCarteira />
    }
]);

export { router }