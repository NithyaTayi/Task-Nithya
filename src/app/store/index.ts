import { State } from './our.model';
import { NewReducer } from './our.reducer';
import { ActionReducerMap } from '@ngrx/store';
export const rootReducer = {};



export interface AppState {
    CanvasList: State;
}
export const reducers: ActionReducerMap<AppState, any> = {
    CanvasList: NewReducer,
};