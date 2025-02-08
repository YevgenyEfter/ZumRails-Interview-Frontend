import { createReducer, on } from '@ngrx/store';
import { PokemonResult } from '../models/pokemon-result';
import { getStats, getStatsFailed, statsReceivedSuccessfully } from './actions';

export interface AppState {
  stats: PokemonResult[] | undefined;
  isLoading: boolean;
  error: string | undefined;
}

export const initialState: AppState = {
  stats: undefined,
  isLoading: true,
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(getStats, (state: AppState, payload: any) => ({
    ...state,
    isLoading: true,
  })),
  on(statsReceivedSuccessfully, (state: AppState, payload: any) => ({
    ...state,
    stats: payload.stats,
    isLoading: false,
    error: undefined,
  })),
  on(getStatsFailed, (state: AppState, payload: any) => ({
    ...state,
    error: payload.errorMessage,
    isLoading: false,
  }))
);
