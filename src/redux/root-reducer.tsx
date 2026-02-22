import { combineReducers } from "@reduxjs/toolkit";

import UsuarioSlice from "./usuario/slice";
import CarteiraSlice from "./carteira/slice";
import OperacaoSlice from "./operacao/slice";

const rootReducer = combineReducers({
    usuario: UsuarioSlice,
    carteira: CarteiraSlice,
    operacao: OperacaoSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;