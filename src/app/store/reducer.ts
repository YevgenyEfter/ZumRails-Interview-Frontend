import { createReducer, on } from '@ngrx/store';

export interface AppState {}

export const initialState: AppState = {};

// export const reducer = createReducer(
//   initialState,
//   on(myAction, (state: AppState, payload: any) => ({
//     ...state,
//     somethingInState: payload.propertyFromPayload,
//   }))
// );
