import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { listarSucesso, listarError } from "./slice";

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

export default all([
   // takeEvery('carteira/salvar', salvar),
   // takeEvery('carteira/buscar', buscar),
  //  takeEvery('carteira/atualizar', atualizar),
]);