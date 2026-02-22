import { all } from 'redux-saga/effects';

import usuario from './usuario/saga';
import carteira from './carteira/saga';

export default function* rootSaga() {
    yield all([
        usuario,
        carteira,
    ]);
}