import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { properties } from '../store/our.model';
@Injectable({
  providedIn: 'root'
})
export class PropserviceService {
  
  isdisabled: boolean=false;
  constructor() { }
  subjectforProp$: Subject<properties> = new Subject();
  DisablePropertyPanel(Properties: properties) {
    this.subjectforProp$.next(Properties);
    this.isdisabled=true
  }
  OnObjectSelected(Properties: properties) {
    this.subjectforProp$.next(Properties);
  }
  onPropertyPanelChange(Properties:properties) {
    this.subjectforProp$.next(Properties);
  }
}
