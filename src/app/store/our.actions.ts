import { Action,props } from "@ngrx/store";
import { State } from "./our.model";

export enum ActionTypes {
    UpdateCanvas = '[model] update_canvas',
    UndoElement = '[model] undo_element',
    RedoElement = '[model] redo_element',
    UndoToggle ='[model] undo_toggle',
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
  export class event_UpdateUndotoggle implements Action {
    public readonly type = ActionTypes.UndoToggle;
    constructor(public payload: State) {}
  }
 
  export class modifiedStateAction implements Action {
    public readonly type = ActionTypes.modifiedaction;
    constructor(public payload: State) {}
  }


  

  export type OurActions = event_RedoElement | event_UndoElement | event_UpdateCanvas | event_UpdateUndotoggle|  modifiedStateAction ;




// export const event_updateAdd =createAction(
//     event_add,props< {model:model}>()
// )

// export const event_updateRotate =createAction(
//     event_rotate,props< {model:model}>()
// )

// export const event_updateScale =createAction(
//     event_scale,props< {model:model}>()
// )

// export const event_updateTranslate =createAction(
//     event_translate,props< {model:model}>()
// )

// export const event_updatepropchange =createAction(
//     event_propchange,props< {model:model}>()
// )
    