import { createAction,props } from "@ngrx/store";
import { model } from "./our.model";
export const event_add = '[model] event_add';

export const event_updated =createAction(
    event_add,props< {model:model}>()
)
    