import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import { ICarteira } from "../../interfaces/carteira.interface";

const initialState = {
    loading: false,
    carteiras: []
}

export const CarteiraSlice = createSlice({
    name: 'carteira',
    initialState,
    reducers: {
        salvar: (state,action) => {                    
             state.loading = true;
        },
        salvarSucesso: (state) => {
            state.loading = false;
            toast.success("Carteira registrada com Sucesso!");
        },
        salvarError: (state, action) => {
            state.loading = false;
            toast.error(action.payload);  
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
            toast.error(action.payload);  
        }
    }
});

export const { salvar, salvarSucesso, salvarError, buscar, buscarSucesso, buscarError } = CarteiraSlice.actions;

export default CarteiraSlice.reducer;
