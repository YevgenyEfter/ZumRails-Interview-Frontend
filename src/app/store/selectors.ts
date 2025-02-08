import { createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const selectStats = createSelector(
  (root: any) => root.reducer,
  (state: AppState) => state.stats
);

export const selectIsLoading = createSelector(
  (root: any) => root.reducer,
  (state: AppState) => state.isLoading
);

export const selectError = createSelector(
  (root: any) => root.reducer,
  (state: AppState) => state.error
);
