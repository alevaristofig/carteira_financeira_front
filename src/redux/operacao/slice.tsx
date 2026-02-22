import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    operacoes: [],
}

export const OperacaoSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        listar: (state,action) => {
             state.loading = true;
        },
        listarSucesso: (state,action) => {
            state.loading = false;
            state.operacoes = action.payload;
        },
        listarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
    }
});

export const { listar, listarSucesso, listarError } = OperacaoSlice.actions;

export default OperacaoSlice.reducer;
