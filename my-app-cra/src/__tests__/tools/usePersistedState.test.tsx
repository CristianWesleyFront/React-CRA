import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import ExempleMock from '__tests__/__mocks__/exemple.persistedState.mock';

afterEach(cleanup);

describe('[Hook] useExemple', () => {
  it('should render an ExempleMock', () => {
    render(<ExempleMock />);
    expect(screen.getAllByTestId('testID')).not.toBeNull();
  });

  it('Should render ExempleMock with localstorage state', () => {
    render(<ExempleMock />);

    const button = screen.getByRole('button');
    const span = screen.getByTestId('testID');

    // Test if secondary has been apply
    expect(span).toHaveTextContent('true');
    // Test if onClink has been called
    fireEvent.click(button);
    // Test if size has been apply
    expect(span).toHaveTextContent('false');
  });
});
