import { createBrowserRouter } from "react-router-dom";

import CadastroUsuario from "./paginas/Usuario/CadastroUsuario";
import Carteira from "./paginas/carteira";
import CadastroCarteira from "./paginas/carteira/CadastroCarteira";

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
    }
]);

export { router }