import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs';
import { getStats, getStatsFailed, statsReceivedSuccessfully } from './actions';
import { PokemonStatsService } from '../services/pokemon-stats.service';
import { PokemonResult } from '../models/pokemon-result';

@Injectable()
export class Effects {
  public constructor(
    private actions$: Actions,
    private pokemonStatsService: PokemonStatsService
  ) {}

  getStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStats),
      exhaustMap((payload) =>
        this.pokemonStatsService
          .getStats(payload.sortBy, payload.sortDirection)
          .pipe(
            map((stats: PokemonResult[]) =>
              statsReceivedSuccessfully({ stats })
            ),
            catchError(async (err: Error) =>
              getStatsFailed({ errorMessage: err.message })
            )
          )
      )
    )
  );
}
