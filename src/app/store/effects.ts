import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './reducer';

@Injectable()
export class Effects {
  public constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  // myAction$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(myAction),
  //     exhaustMap(() =>
  //       this.service.method().pipe(
  //         map((result: any) => successAction({ result })),
  //         catchError(async (err: Error) =>
  //           failureAction({ errorMessage: err.message })
  //         )
  //       )
  //     )
  //   )
  // );

  // successAction$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(successAction),
  //       tap(() => this.store.dispatch(anotherAction))
  //     ),
  //   { dispatch: false }
  // );
}
