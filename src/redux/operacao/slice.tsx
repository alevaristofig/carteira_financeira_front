import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    operacoes: [],
}

export const OperacaoSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {}
});

export const { } = OperacaoSlice.actions;

export default OperacaoSlice.reducer;
