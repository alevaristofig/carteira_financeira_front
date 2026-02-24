import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { listarSucesso, listarError, buscarSucesso, buscarError, depositarSucesso, depositarError,
         transferirSucesso, transferirError, revisarSucesso, revisaoError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { IOperacao } from "../../interfaces/operacao.interface";

function* listar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {
        const response = yield call(axios.get,`http://localhost:8000/api/carteira/operacoes/listar/${action.payload.id}`,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(listarSucesso(response.data));
  } catch(error: any) {    
     yield put(listarError("Erro ao listar as operações"));
  }
}

function* buscar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {
        const response = yield call(axios.get,`http://localhost:8000/api/carteira/operacoes/buscar/${action.payload.id}`,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(buscarSucesso(response.data));
  } catch(msg: any) {  
     yield put(buscarError("Erro ao buscar a operação"));
  }
}

function* depositar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {

        let dados = {
            carteira_id: action.payload.carteira,
            tipo_operacao: action.payload.tipo_operacao,
            descricao: action.payload.descricao,
            valor: action.payload.valor,
            status: action.payload.status
        }

        const response = yield call(axios.post,`http://localhost:8000/api/carteira/operacoes/depositar`,dados,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(depositarSucesso(response.data));
  } catch(error: any) {    
     yield put(depositarError(error.response.data.error));
  }
}

function* transferir(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {

        let dados = {
            carteira_id: action.payload.carteira,
            tipo_operacao: action.payload.tipo_operacao,
            valor: action.payload.valor,
            status: action.payload.status
        }

        const response = yield call(axios.post,`http://localhost:8000/api/carteira/operacoes/transferir`,dados,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(transferirSucesso(response.data));
  } catch(error: any) {    
     yield put(transferirError(error.response.data.error));
  }
}

function* revisar(action: AnyAction): Generator<any, void, AxiosResponse<IOperacao>>  {
    try {

        let dados = {
            id: action.payload.id,
            descricao: action.payload.descricao,
        }

        const response = yield call(axios.post,`http://localhost:8000/api/carteira/operacoes/revisar`,dados,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(revisarSucesso(response.data));
  } catch(error: any) {    
     yield put(revisaoError(error.response.data.error));
  }
}

export default all([
    takeEvery('operacao/listar', listar),
    takeEvery('operacao/buscar', buscar),
    takeEvery('operacao/depositar', depositar),
    takeEvery('operacao/transferir', transferir),
    takeEvery('operacao/revisar', revisar),
]);