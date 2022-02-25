import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { ExempleProvider } from 'hooks/useExemple';
import ExempleMock from '__tests__/__mocks__/useExemple.mock';

afterEach(cleanup);

describe('[Hook] useExemple', () => {
  it('should render an useExemple', () => {
    const { container } = render(
      <ExempleProvider>
        <ExempleMock />
      </ExempleProvider>,
    );
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('Should render Button with default props', () => {
    render(
      <ExempleProvider>
        <ExempleMock />
      </ExempleProvider>,
    );

    const button = screen.getByRole('button');
    const span = screen.getByTestId('testSpanID');

    // Test Label Button
    expect(button).toHaveTextContent(/change/i);
    // Test if secondary has been apply
    expect(span).toHaveTextContent('close');
    // Test if onClink has been called
    fireEvent.click(button);
    // Test if size has been apply
    expect(span).toHaveTextContent('open');
  });
});
