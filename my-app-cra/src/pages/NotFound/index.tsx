import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper, P } from './styles';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Página Não Encontrada</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Página Não Encontrada.</P>
      </Wrapper>
    </>
  );
}
