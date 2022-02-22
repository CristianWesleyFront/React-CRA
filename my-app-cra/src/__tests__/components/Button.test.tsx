import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from 'app/App';

afterEach(cleanup);

describe('<App />', () => {
  it('Should render App', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
