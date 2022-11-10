import { createReducer,on } from "@ngrx/store";
import { event_updated } from "./our.actions";

export const initialState:string[] = [];


export const counterReducer = createReducer(
  initialState,
  on(event_updated,(state,payload)=>{let newstate= state.concat(payload.model.eventstring )
  return newstate
  
  }),
);