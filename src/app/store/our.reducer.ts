import { createReducer,on } from "@ngrx/store";
//import { event_updateRotate,event_updateScale,event_updateTranslate,event_updateAdd, event_updatepropchange } from '../store/our.actions';
import { ActionTypes, OurActions } from '../store/our.actions';
import { initialState,State } from "./our.model";
import { UndoRedoserviceService } from '../services/undo-redoservice.service';


export function NewReducer(state = initialState, action: OurActions): State {
  switch (action.type) {
    case ActionTypes.UpdateCanvas:
      return {
        ...state,
          eventstring: action.payload.eventstring,
          undotoggle:false
      };
      case ActionTypes.UndoElement:
      return {
        ...state
    
      };
      case ActionTypes.RedoElement:
      return {
        ...state,
          eventstring: action.payload.eventstring,
          undotoggle:action.payload.undotoggle
      };
      case ActionTypes.UndoToggle:
        return {
          ...state,
            eventstring: action.payload.eventstring,
            undotoggle:true
        };
      case ActionTypes.modifiedaction:
        return{
          ...state,
          eventstring:action.payload.eventstring,
    undotoggle:action.payload.undotoggle
        }

    default:
      return state;
  }
}