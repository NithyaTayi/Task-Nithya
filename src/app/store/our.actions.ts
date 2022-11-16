import { createAction,props } from "@ngrx/store";
import { model } from "./our.model";


export const event_add = '[model] event_add';
export const event_rotate='[model] event_rotate';
export const event_scale='[model] event_scale';
export const event_translate='[model] event_translate';
export const event_propchange='[model] event_property changed';



export const event_updateAdd =createAction(
    event_add,props< {model:model}>()
)

export const event_updateRotate =createAction(
    event_rotate,props< {model:model}>()
)

export const event_updateScale =createAction(
    event_scale,props< {model:model}>()
)

export const event_updateTranslate =createAction(
    event_translate,props< {model:model}>()
)

export const event_updatepropchange =createAction(
    event_propchange,props< {model:model}>()
)
    