import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { IUsuario } from "../../interfaces/usuario.interface";

function* salvar(action: AnyAction): Generator<any, void, AxiosResponse<IUsuario>>  {}


export default all([
    //takeEvery('pedido/listar', listar),
    //takeEvery('pedido/confirmar', confirmar),
    //takeEvery('pedido/atualizarStatus', atualizarStatus),
]);