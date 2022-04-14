import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ExempleSelectos from '__tests__/__mocks__/exemple.selectors.mock';
import ReduxMock from '__tests__/__mocks__/redux.mock';

afterEach(cleanup);

describe('[ReduxSelects] Exemple', () => {
  it('should return fuction with useSelectos', () => {
    render(
      <ReduxMock>
        <ExempleSelectos />
      </ReduxMock>,
    );

    // Test getUser
    expect(screen.getByTestId('selectUser')).toHaveTextContent(/true/i);
    // Test errorUser
    expect(screen.getByTestId('selectLoading')).toHaveTextContent(/true/i);
    // Test dataUser
    expect(screen.getByTestId('selectError')).toHaveTextContent(/true/i);
  });
});
