import React from 'react';

import { AnyAction } from '@reduxjs/toolkit';
import { cleanup, render, screen } from '@testing-library/react';
import ExempleSlice from '__tests__/__mocks__/exemple.slice.mock';
import ReduxMock from '__tests__/__mocks__/redux.mock';
import {
  exempleActions,
  initialState,
  reducer,
} from 'store/exemple/exemple.reducer';

afterEach(cleanup);

describe('[REDUX] Exemple Actions', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {} as AnyAction)).toEqual({
      user: null,
      loading: false,
      error: null,
    });
  });

  it('should change loading and error if has been called', () => {
    expect(reducer(initialState, exempleActions.getUser('123'))).toEqual({
      user: null,
      loading: true,
      error: null,
    });
  });

  it('should change error if has been a error in fetch', () => {
    expect(
      reducer(
        initialState,
        exempleActions.errorUser({ mensage: 'Any Error', status: 500 }),
      ),
    ).toEqual({
      user: null,
      loading: false,
      error: { mensage: 'Any Error', status: 500 },
    });
  });

  it('should change dataUser if has been a success in fetch', () => {
    expect(
      reducer(
        initialState,
        exempleActions.dataUser({ codigo: 123, nomeFantasia: 'Test 123' }),
      ),
    ).toEqual({
      user: { codigo: 123, nomeFantasia: 'Test 123' },
      loading: false,
      error: null,
    });
  });
});

describe('[UseSlice] Exemple', () => {
  it('should return fuction with useExempleSlice', () => {
    render(
      <ReduxMock>
        <ExempleSlice />
      </ReduxMock>,
    );

    // Test getUser
    expect(screen.getByTestId('getUser')).toHaveTextContent(/function/i);
    // Test errorUser
    expect(screen.getByTestId('errorUser')).toHaveTextContent(/function/i);
    // Test dataUser
    expect(screen.getByTestId('dataUser')).toHaveTextContent(/function/i);
  });
});
