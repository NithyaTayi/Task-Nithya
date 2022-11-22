import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UndoRedoserviceService {
  undopop:any
  redopop:any
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
    this.undopop=this.forundostack.pop()
    this.forredostack.push(this.undopop);
    if (this.forundostack.length == 1) {
      this.undoEnable$.next(false);
    }
    this.redoEnable$.next(true);
     return this.forundostack[this.forundostack.length-1]
  }

  toredo(){
  this.redopop=this.forredostack.pop()
  this.forundostack.push(this.redopop!)
  if (this.forredostack.length == 0) {
    this.redoEnable$.next(false);
  }
  return this.redopop
  }
  undoEnable(): Observable<boolean> {
    return this.undoEnable$.asObservable();
  }
  redoEnable(): Observable<boolean> {
    return this.redoEnable$.asObservable();
  }
}
