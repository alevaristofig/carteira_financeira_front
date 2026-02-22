import { combineReducers } from "@reduxjs/toolkit";

import UsuarioSlice from "./usuario/slice";
import CarteiraSlice from "./carteira/slice";

const rootReducer = combineReducers({
    usuario: UsuarioSlice,
    carteira: CarteiraSlice
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;