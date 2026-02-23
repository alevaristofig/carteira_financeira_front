import { all, takeEvery, put, call } from "redux-saga/effects";
import { AnyAction } from "redux-saga";

import { salvarSucesso, salvarError } from "./slice";

import axios, { AxiosResponse } from 'axios';
import { IUsuario } from "../../interfaces/usuario.interface";

function* salvar(action: AnyAction): Generator<any, void, AxiosResponse<IUsuario>>  {
    try {
            let dados = {
                name: action.payload.nome,
                email: action.payload.email,
                password: action.payload.senha  
            }

            yield call(axios.post,`http://localhost:8000/api/carteira/usuarios`,dados);

        yield put(salvarSucesso());
  } catch(error: any) {   
     yield put(salvarError(error.message));
  }
}


export default all([
    takeEvery('usuario/salvar', salvar),
]);