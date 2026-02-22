import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    usuarios: [],
}

export const UsuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {}
});

export const {} = UsuarioSlice.actions;

export default UsuarioSlice.reducer;