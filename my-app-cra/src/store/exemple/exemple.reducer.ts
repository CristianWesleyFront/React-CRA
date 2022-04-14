import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'tools/@redux/toolkit';
import { useInjectReducer, useInjectSaga } from 'tools/@redux/redux-injectors';
import { ExempleState, IUser } from './exemple.types';
import { exempleSaga } from './exemple.saga';
import { IError } from 'types';

export const initialState: ExempleState = {
  user: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'exemple',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<string>) {
      state.error = null;
      state.loading = true;
    },
    errorUser(state, action: PayloadAction<IError>) {
      state.error = action.payload;
      state.loading = false;
    },
    dataUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: exempleActions, reducer } = slice;

export const useExempleSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: exempleSaga });
  return { actions: slice.actions };
};
