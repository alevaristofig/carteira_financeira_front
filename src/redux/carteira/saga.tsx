import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError } from "./slice";

import axios, { AxiosResponse } from 'axios';

export default all([
    //takeEvery('usuario/salvar', salvar),
    //takeEvery('pedido/confirmar', confirmar),
    //takeEvery('pedido/atualizarStatus', atualizarStatus),
]);