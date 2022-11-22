import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UndoRedoserviceService {
  constructor() { }
  undoEnable$ = new BehaviorSubject<boolean>(false);
  redoEnable$ = new BehaviorSubject<boolean>(false);
  forundostack:Array<string>=[JSON.stringify('')]
  forredostack:Array<string>=[]

  topush(state:string) {
    this.forundostack.push(state);
    this.undoEnable$.next(true);
    this.forredostack=[]
    this.redoEnable$.next(false);
  }

  toundo(){
    let undopop:any;
    undopop=this.forundostack.pop()
    this.forredostack.push(undopop);
    if (this.forundostack.length == 1) {
      this.undoEnable$.next(false);
    }
    this.redoEnable$.next(true);
     return this.forundostack[this.forundostack.length-1]
  }

  toredo(){
  let redopop:any;
  redopop=this.forredostack.pop()
  this.undoEnable$.next(true);
  this.forundostack.push(redopop!)
  if (this.forredostack.length == 0) {
    this.redoEnable$.next(false);
  }
  return redopop
  }
  undoEnable(): Observable<boolean> {
    return this.undoEnable$.asObservable();
  }
  redoEnable(): Observable<boolean> {
    return this.redoEnable$.asObservable();
  }
}
