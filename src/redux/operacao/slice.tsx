import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    operacoes: [],
}

export const OperacaoSlice = createSlice({
    name: 'operacao',
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
            toast.error(action.payload);  
        },
        transferir: (state,action) => {
             state.loading = true;
        },
        transferirSucesso: (state,action) => {
            state.loading = false;
            state.operacoes = action.payload;
            toast.success("Transferência efetuada com sucesso");
        },
        transferirError: (state, action) => {
            state.loading = false;
            toast.error(action.payload);  
        },
        revisar: (state,action) => {
             state.loading = true;
        },
        revisarSucesso: (state,action) => {
            state.loading = false;
            state.operacoes = action.payload;
            toast.success("Revisão efetuado com sucesso, aguarde a resposta");
        },
        revisaoError: (state, action) => {
            state.loading = false;
            toast.error(action.payload);  
        },
    }
});

export const { listar, listarSucesso, listarError, buscar, buscarSucesso, buscarError,
               depositar, depositarSucesso, depositarError, transferir, transferirSucesso, 
               transferirError, revisar, revisarSucesso, revisaoError } = OperacaoSlice.actions;

export default OperacaoSlice.reducer;
