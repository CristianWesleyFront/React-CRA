import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { NotFound } from 'pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';

afterEach(cleanup);

describe('<NotFound />', () => {
  it('should render an NotFound ', async () => {
    render(
      <HelmetProvider>
        <NotFound />
      </HelmetProvider>,
    );

    const text = screen.getByText(/Página Não Encontrada./i);

    expect(text).toBeInTheDocument();

    await wait(() => {
      expect(document.title).toEqual('404 Página Não Encontrada');
    });
  });
});
