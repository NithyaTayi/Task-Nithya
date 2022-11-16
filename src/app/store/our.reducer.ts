import { createReducer,on } from "@ngrx/store";
import { event_updateRotate,event_updateScale,event_updateTranslate,event_updateAdd, event_updatepropchange } from '../store/our.actions';
import { initialState } from "./our.model";

export const counterReducer = createReducer(
  initialState,
  on(event_updateAdd,(state,payload)=>{
      return{
        ...state,
        eventstring:payload.model.eventstring
      }
  }),
  on(event_updateTranslate,(state,payload)=>{
    return{
      ...state,
      eventstring:payload.model.eventstring
    }
}),
on(event_updateScale,(state,payload)=>{
  return{
    ...state,
    eventstring:payload.model.eventstring
  }
}),
on(event_updateRotate,(state,payload)=>{
  return{
    ...state,
    eventstring:payload.model.eventstring
  }
}),
on(event_updatepropchange,(state,payload)=>{
  return{
    ...state,
    eventstring:payload.model.eventstring
  }
}),

);


