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
        }
    }
});

export const { salvar, salvarSucesso, salvarError } = CarteiraSlice.actions;

export default CarteiraSlice.reducer;
