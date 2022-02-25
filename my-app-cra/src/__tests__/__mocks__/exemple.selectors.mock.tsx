import React from 'react';
import { useSelector } from 'react-redux';
import { useExempleSlice } from 'store/exemple/exemple.reducer';
import {
  SelectError,
  SelectLoading,
  SelectUser,
} from 'store/exemple/exemple.selector';

const ExempleSlice: React.FC = () => {
  useExempleSlice();
  const selectUser = useSelector(SelectUser);
  const selectLoading = useSelector(SelectLoading);
  const selectError = useSelector(SelectError);

  return (
    <div>
      <span data-testid="selectUser">{`${selectUser === null}`}</span>
      <span data-testid="selectLoading">{`${selectLoading === false}`}</span>
      <span data-testid="selectError">{`${selectError === null}`}</span>
    </div>
  );
};

export default ExempleSlice;
