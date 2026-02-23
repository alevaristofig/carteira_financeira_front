import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError, buscarSucesso, buscarError } from "./slice";

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
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(salvarSucesso());
  } catch(msg: any) {       
     yield put(salvarError(msg.error));
  }
}

function* buscar(action: AnyAction): Generator<any, void, AxiosResponse<ICarteira[]>>  {
    try {
        console.log(action.id)
        const response = yield call(axios.get,`http://localhost:8000/api/carteira/carteiras/${action.payload.id}`,{
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        yield put(buscarSucesso(response.data));
  } catch(error: any) {    
     yield put(buscarError('Erro ao buscar a carteira'));
  }
}

export default all([
    takeEvery('carteira/salvar', salvar),
    takeEvery('carteira/buscar', buscar),
]);