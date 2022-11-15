import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { properties } from '../store/our.model';
import { Store } from '@ngrx/store';
import { event_updatepropchange } from '../store/our.actions';

@Injectable({
  providedIn: 'root'
})
export class PropserviceService {
  canvas: any;
  isdisabled: boolean=false;
  constructor(private store:Store) { }

  
  subjectforProp$: Subject<properties> = new Subject();
  //subjectforProp$ =this.subjectforProp.asObservable();

  DisablePropertyPanel() {
    this.subjectforProp$.next();
    this.isdisabled=true

  }

  OnObjectSelected(Properties: properties) {
    console.log(Properties,'onobj')
    this.subjectforProp$.next(Properties);
  }

  onPropertyPanelChange(Properties:properties) {
    this.subjectforProp$.next(Properties);
    console.log('Property Panel Changed');
  }
  setMessage(): Observable<properties> {
    //console.log(this.subjectforProp$+'propser')
    return this.subjectforProp$.asObservable();

  }


  getSelectedObjectsProperties() {
    
    //console.log(this.canvas.getActiveObject().type);
    let objecttype = this.canvas.getActiveObject().type;
    

     if (objecttype == 'activeSelection') {
      this.DisablePropertyPanel();
    } else {
      let currentprop: properties = {
        strokewidth: this.canvas.getActiveObject().get('strokeWidth') as number,
        strokecolor: this.canvas.getActiveObject().get('stroke') as string,
        fillcolor: this.canvas.getActiveObject().get('fill') as string,
        objangle: this.canvas.getActiveObject().get('angle') as number,
      };
    //console.log(currentprop,'currentprop')

      this.OnObjectSelected(currentprop);
      //this.subjectforProp$.next
     }
  }

 


  
  // getProperties() {

  //   let ObjProperties: IObjectModel = {

  //     stroke: this.canvas.getActiveObject().get('stroke') as string,

  //     strokeWidth: this.canvas.getActiveObject().get('strokeWidth') as number,

  //     fill: this.canvas.getActiveObject().get('fill') as string,

  //     angle: this.canvas.getActiveObject().get('angle') as number,

  //   };

  //   console.log('prp:', ObjProperties);

  //   this.objectProperties$.next(ObjProperties);

  // }

  newprops(Properties:properties) {
    console.log(this.canvas.getActiveObject());
    this.canvas.getActiveObject().set('strokeWidth', Properties.strokewidth);
    this.canvas.getActiveObject().set('fill', Properties.fillcolor);
    this.canvas.getActiveObject().set('stroke', Properties.strokecolor);
    this.canvas.getActiveObject().set('angle', Properties.objangle);
    this.canvas.renderAll();
    this.store.dispatch(event_updatepropchange({model:{eventstring:JSON.stringify(this.canvas)}}))
  }

 


  
}
