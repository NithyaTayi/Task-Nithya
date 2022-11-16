import { Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { event_updateRotate,event_updateScale,event_updateTranslate,event_updateAdd,event_updatepropchange } from '../store/our.actions';
import { PropserviceService } from './propservice.service';
import { properties } from '../store/our.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  canvas!: fabric.Canvas;
  public subject = new BehaviorSubject<string>('');
  constructor(private store:Store,private PropserviceService:PropserviceService) { }
  

  eventHandler() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is added');
                this.store.dispatch(event_updateAdd({model:{eventstring:JSON.stringify(this.canvas)}})) 
            }
        });
        this.canvas.on('object:modified',(options:any)=>{
         if(options["action"]=='rotate'){
                this.store.dispatch(event_updateRotate({model:{eventstring:JSON.stringify(this.canvas)}}))
                this.getSelectedObjectsProperties();
             }
             if(options["action"]=='scale'){
                 this.store.dispatch(event_updateScale({model:{eventstring:JSON.stringify(this.canvas)}})) 
             }
             if(options["action"]=='drag'){
                 this.store.dispatch(event_updateTranslate({model:{eventstring:JSON.stringify(this.canvas)}}))
             }
        
    })
        this.canvas.on('object:moving', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is translated');
            }
        });
        this.canvas.on('object:scaling', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is scaled');
            }
        });
        this.canvas.on('object:rotating', (options: any) => {
            if (options.target) {
                
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is rotated');
            }
        });

        this.canvas.on('selection:created', (options: any) => {
            if (options.target) {
              if(options.target.type!= 'activeSelection')
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is selected');
                
            }
            this.getSelectedObjectsProperties();
          });

        this.canvas.on('selection:updated', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is selected');
            }

            this.getSelectedObjectsProperties();
          });


          
          this.canvas.on('selection:cleared', (options: any) => {
            this.subject.next('No Object Is Selected');
          });
      
    }
    eventMessage(): Observable<string> {
      return this.subject.asObservable();
  }

  getSelectedObjectsProperties() {
    let objecttype = this.canvas.getActiveObject().get('type');
     if (objecttype == 'activeSelection') {
      let disableprops:properties = {
        strokewidth:0,
        strokecolor:'#000000',
        fillcolor:'#000000',
        objangle:0,
        isdisabled:true
        // strokewidth:this.canvas.getActiveObject().set('strokeWidth', 0) ,
        // strokecolor:this.canvas.getActiveObject().set('fill','#000000'),
        // fillcolor:this.canvas.getActiveObject().set('stroke', '#000000'),
        // objangle:this.canvas.getActiveObject().set('angle', 0),
      };

      this.PropserviceService.DisablePropertyPanel(disableprops);
    } else {
      let currentprop: properties = {
        strokewidth: this.canvas.getActiveObject().get('strokeWidth') as number,
        strokecolor: this.canvas.getActiveObject().get('stroke') as string,
        fillcolor: this.canvas.getActiveObject().get('fill') as string,
        objangle: this.canvas.getActiveObject().get('angle') as number,
        isdisabled:false
      };
      console.log(currentprop.objangle)
      this.PropserviceService.OnObjectSelected(currentprop);
     }
  }

  

  newprops(Properties:properties) {
    console.log(this.canvas.getActiveObject());
    this.canvas.getActiveObject().set('strokeWidth', Properties.strokewidth);
    this.canvas.getActiveObject().set('fill', Properties.fillcolor);
    this.canvas.getActiveObject().set('stroke', Properties.strokecolor);
    this.canvas.getActiveObject().set('angle', Properties.objangle);
    console.log(Properties.objangle)
    this.canvas.renderAll();
    this.store.dispatch(event_updatepropchange({model:{eventstring:JSON.stringify(this.canvas)}}))
  }
}
