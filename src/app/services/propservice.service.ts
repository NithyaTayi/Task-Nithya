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
    console.log('hello')
  }
  OnObjectSelected(Properties: properties) {
    console.log(Properties,'onobj')
    this.subjectforProp$.next(Properties);
  }
  onPropertyPanelChange(Properties:properties) {
    this.subjectforProp$.next(Properties);
    console.log('Property Panel Changed');
  }
}
