import React from 'react';
import { useExempleSlice } from 'store/exemple/exemple.reducer';
// import { Container } from './styles';

const ExempleSlice: React.FC = () => {
  const { actions } = useExempleSlice();

  return (
    <div>
      <span data-testid="getUser">{typeof actions.getUser}</span>
      <span data-testid="errorUser">{typeof actions.errorUser}</span>
      <span data-testid="dataUser">{typeof actions.dataUser}</span>
    </div>
  );
};

export default ExempleSlice;
