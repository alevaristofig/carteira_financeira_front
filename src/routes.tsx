import { createBrowserRouter } from "react-router-dom";

import CadastroUsuario from "./paginas/Usuario/CadastroUsuario";

const router = createBrowserRouter([
    {
        path: '/cadastrousuario',
        element: <CadastroUsuario />
    }
]);

export { router }