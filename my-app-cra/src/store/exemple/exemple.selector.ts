import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

const exempleSelector = (state: RootState) => state.exemple;

export const SelectUser = createSelector(
  [exempleSelector],
  exempleState => exempleState.user,
);

export const SelectLoading = createSelector(
  [exempleSelector],
  exempleState => exempleState.loading,
);

export const SelectError = createSelector(
  [exempleSelector],
  exempleState => exempleState.error,
);
