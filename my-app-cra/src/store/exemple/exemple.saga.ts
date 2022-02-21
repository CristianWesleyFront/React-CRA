/**
 * Root saga manages watcher lifecycle
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getCounty as api } from 'services/exemple';
import { IUser } from './exemple.types';
import { exempleActions as actions } from './exemple.reducer';
export function* getUser(action: PayloadAction<string>) {
  yield delay(1000);

  const cep = action.payload;

  try {
    const response: AxiosResponse<any> = yield call(api, { cep });

    const user: IUser = yield response;

    if (user.codigo) {
      yield put(actions.dataUser(user));
    } else {
      yield put(
        actions.errorUser({
          status: 404,
          mensage: 'Usuário não encontrado',
        }),
      );
    }
  } catch (err: any) {
    if (err?.response?.status === 400) {
      yield put(
        actions.errorUser({
          status: 404,
          mensage: 'Usuário não encontrado',
        }),
      );
    } else {
      yield put(
        actions.errorUser({
          status: 500,
          mensage: 'Error no servidor',
        }),
      );
    }
  }
}
export function* exempleSaga() {
  yield takeLatest(actions.getUser.type, getUser);
}
