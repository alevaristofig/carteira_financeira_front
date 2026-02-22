import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { ICarteira } from "../../interfaces/carteira.interface";

function* salvar(action: AnyAction): Generator<any, void, AxiosResponse<ICarteira>>  {
    try {
        yield call(axios.post,`http://localhost:8000/api/carteira_financeira/carteira`,action.payload,{
            /*headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }*/
        });

        yield put(salvarSucesso());
  } catch(error: any) {    
     yield put(salvarError(error.response.data.message));
  }
}

export default all([
    takeEvery('carteira/salvar', salvar),
    //takeEvery('pedido/confirmar', confirmar),
    //takeEvery('pedido/atualizarStatus', atualizarStatus),
]);