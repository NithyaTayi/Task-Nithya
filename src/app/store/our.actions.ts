import { Action } from "@ngrx/store";
import { State } from "./our.model";

export enum ActionTypes {
    UpdateCanvas = '[model] update_canvas',
    UndoElement = '[model] undo_element',
    RedoElement = '[model] redo_element',
    modifiedaction='[model] modified_action'
  }

  export class event_UpdateCanvas implements Action {
    public readonly type = ActionTypes.UpdateCanvas;
    constructor(public payload: State) {}
  }
  export class event_UndoElement implements Action {
    public readonly type = ActionTypes.UndoElement;
    constructor(payload: State) {}
  }
  export class event_RedoElement implements Action {
    public readonly type = ActionTypes.RedoElement;
    constructor(public payload: State) {}
  }
  export class modifiedStateAction implements Action {
    public readonly type = ActionTypes.modifiedaction;
    constructor(public payload: State) {}
  }

  export type OurActions = event_RedoElement | event_UndoElement | event_UpdateCanvas |  modifiedStateAction ;