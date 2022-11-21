
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../store/our.model';

const canvasState = createFeatureSelector<State>('CanvasList')

export const getCanvasState = createSelector(canvasState, state => {
    return state.eventstring
}
);

export const getCanvasUndostate = createSelector(canvasState, state => {
    if (state.undotoggle){
        return state.eventstring
    }
    else{
        return null
    }
} 
);

