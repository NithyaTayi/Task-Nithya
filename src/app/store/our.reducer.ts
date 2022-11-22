import { ActionTypes, OurActions } from '../store/our.actions';
import { initialState,State } from "./our.model";

export function NewReducer(state = initialState, action: OurActions): State {
  switch (action.type) {
    case ActionTypes.UpdateCanvas:
      return {
        ...state,
          eventstring: action.payload.eventstring,
          undotoggle:false
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