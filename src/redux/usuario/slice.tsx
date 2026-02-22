import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    usuarios: [],
}

export const UsuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        salvar: (state) => {
             state.loading = true;
        },
        salvarSucesso: (state) => {
            state.loading = false;
            toast.success("Usuário registrado com Sucesso!");
        },
        salvarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        }
    }
});

export const { salvar, salvarSucesso, salvarError } = UsuarioSlice.actions;

export default UsuarioSlice.reducer;