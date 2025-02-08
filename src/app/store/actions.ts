import { createAction, props } from '@ngrx/store';
import { PokemonResult } from '../models/pokemon-result';
import { SortType } from '../models/sort-type';
import { SortDirection } from '../models/sort-direction';

export const getStats = createAction(
  '[Stats] Get pokemon tournament statistics',
  props<{ sortBy: SortType; sortDirection: SortDirection }>()
);

export const statsReceivedSuccessfully = createAction(
  '[Stats] Pokemon tournament statistics received',
  props<{ stats: PokemonResult[] }>()
);

export const getStatsFailed = createAction(
  '[Stats] Failed to get pokemon tournament statistics.',
  props<{ errorMessage: string }>()
);
