import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    carteiras: [],
}

export const CarteiraSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        salvar: (state) => {
             state.loading = true;
        },
        salvarSucesso: (state) => {
            state.loading = false;
            toast.success("Carteira registrada com Sucesso!");
        },
        salvarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
        buscar: (state,action) => {
             state.loading = true;
        },
        buscarSucesso: (state,action) => {
            state.loading = false;
            state.carteiras = action.payload;
        },
        buscarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
        atualizar: (state,action) => {
            state.loading = true;
        },
        atualizarSucesso: (state) => {
            state.loading = false;
            toast.success("Carteira atualizada com Sucesso!");
        },
        atualizarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload.message);  
        },
    }
});

export const { salvar, salvarSucesso, salvarError, buscar, buscarSucesso, buscarError,
               atualizar, atualizarSucesso, atualizarError } = CarteiraSlice.actions;

export default CarteiraSlice.reducer;
