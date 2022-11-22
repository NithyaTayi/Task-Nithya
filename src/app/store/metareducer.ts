import {  ActionReducer, MetaReducer } from '@ngrx/store';
import { UndoRedoserviceService } from '../services/undo-redoservice.service';
import { ActionTypes, OurActions,modifiedStateAction } from '../store/our.actions';
import { AppState} from './index'

export function undoRedoMetaReducer(
  undoRedoService: UndoRedoserviceService
): MetaReducer<AppState,OurActions> {
  function undoRedo(
    reducer: ActionReducer<AppState,OurActions>
  ): ActionReducer<AppState,OurActions> {
    return (state, action:OurActions) => {
      let modifiedAction = action;
      let modifiedstate ;
      switch (action.type) {
        case ActionTypes.UndoElement:
          modifiedstate = undoRedoService.toundo();
          break;

        case ActionTypes.RedoElement:
          modifiedstate =  undoRedoService.toredo();
          console.log(modifiedstate,'modi')
          break;

        case ActionTypes.UpdateCanvas:
          undoRedoService.topush(action.payload.eventstring);
          break; 
      }
      if (modifiedstate != undefined) {
        modifiedAction = new modifiedStateAction({
          eventstring: modifiedstate as string,
          undotoggle:true
        });
      }
      return reducer(state, modifiedAction);
    };
  }
  return undoRedo;
}
