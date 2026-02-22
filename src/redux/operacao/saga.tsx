import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { listarSucesso, listarError, buscarSucesso, buscarError, depositarSucesso, depositarError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { IOperacao } from "../../interfaces/operacao.interface";

function* listar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {
        const response = yield call(axios.get,`http://localhost:8000/api/carteira_financeira/operacao/${action.carteiraId}`,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(listarSucesso(response.data));
  } catch(error: any) {    
     yield put(listarError(error.response.data.message));
  }
}

function* buscar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {
        const response = yield call(axios.get,`http://localhost:8000/api/carteira_financeira/operacao/${action.id}`,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(buscarSucesso(response.data));
  } catch(error: any) {    
     yield put(buscarError(error.response.data.message));
  }
}

function* depositar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {

        let dados = {
            carteira_id: action.payload.carteiraId,
            descricao: action.payload.descricao,
            valor: action.payload.valor,
            status: action.payload.status
        }

        const response = yield call(axios.post,`http://localhost:8000/api/carteira_financeira/operacao/`,dados,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(depositarSucesso(response.data));
  } catch(error: any) {    
     yield put(depositarError(error.response.data.message));
  }
}

export default all([
    takeEvery('operacao/listar', listar),
    takeEvery('operacao/buscar', buscar),
    takeEvery('operacao/depositar', depositar),
]);