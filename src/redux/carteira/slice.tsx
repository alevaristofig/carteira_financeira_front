import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    carteiras: [],
}

export const CarteiraSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {}
});

export const { salvar, salvarSucesso, salvarError } = CarteiraSlice.actions;

export default CarteiraSlice.reducer;
