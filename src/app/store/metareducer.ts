import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { UndoRedoserviceService } from '../services/undo-redoservice.service';
import { State } from './our.model';
import { Action, props } from '@ngrx/store';
import { ActionTypes, OurActions, event_UpdateUndotoggle,modifiedStateAction } from '../store/our.actions';
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
          modifiedAction = new event_UpdateUndotoggle({
            eventstring: modifiedstate,
            undotoggle:true
        });
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
