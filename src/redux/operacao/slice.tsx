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
        buscar: (state,action) => {
             state.loading = true;
        },
        buscarSucesso: (state,action) => {
            state.loading = false;
            state.operacoes = action.payload;
        },
        buscarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
        depositar: (state,action) => {
             state.loading = true;
        },
        depositarSucesso: (state,action) => {
            state.loading = false;
            state.operacoes = action.payload;
            toast.success("Depósito efetuado com sucesso");
        },
        depositarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
    }
});

export const { listar, listarSucesso, listarError, buscar, buscarSucesso, buscarError,
               depositar, depositarSucesso, depositarError } = OperacaoSlice.actions;

export default OperacaoSlice.reducer;
