export interface State{
    eventstring:string;
    undotoggle:boolean
}
export const initialState:State = {
    eventstring:JSON.stringify(' '),
    undotoggle:false
  };
export interface properties {
    strokewidth: number;
    strokecolor: string;
    fillcolor: string;
    objangle: number;
    isdisabled:boolean;
  }
