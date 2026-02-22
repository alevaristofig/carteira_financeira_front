import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError, buscarSucesso, buscarError, atualizarSucesso, atualizarError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { ICarteira } from "../../interfaces/carteira.interface";

function* salvar(action: AnyAction): Generator<any, void, AxiosResponse<ICarteira>>  {
    try {

        let dados = {
            'user_id': action.payload.user_id,
            'numero': action.payload.numero,
            'titular': action.payload.titular,
            'saldo': action.payload.saldo,
            'valorNegativo': action.payload.valorNegativo
        };

        yield call(axios.post,`http://localhost:8000/api/carteira/carteiras`,dados,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(salvarSucesso());
  } catch(error: any) {  
    console.log(error)  
     yield put(salvarError(error.response.data.message));
  }
}

function* buscar(action: AnyAction): Generator<any, void, AxiosResponse<ICarteira>>  {
    try {
        const response = yield call(axios.get,`http://localhost:8000/api/carteira_financeira/carteira/${action.id}`,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(buscarSucesso(response.data));
  } catch(error: any) {    
     yield put(buscarError(error.response.data.message));
  }
}

function* atualizar(action: AnyAction): Generator<any, void, AxiosResponse<ICarteira>>  {
    try {

        let dados = {
            'titular': action.payload.titular,
            'numero': action.payload.numero,
            'valorNegativo': action.payload.valorNegativo,
        }

        yield call(axios.patch,`http://localhost:8000/api/carteira/carteira/${action.payload.id}`,dados,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(atualizarSucesso());

    } catch(error: any) {    
        yield put(atualizarError(error.response.data.message));
    }
}

export default all([
    takeEvery('carteira/salvar', salvar),
    takeEvery('carteira/buscar', buscar),
    takeEvery('carteira/atualizar', atualizar),
]);