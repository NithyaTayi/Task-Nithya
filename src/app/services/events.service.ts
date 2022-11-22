import { Injectable} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { event_RedoElement, event_UndoElement, event_UpdateCanvas } from '../store/our.actions';
import { PropserviceService } from './propservice.service';
import { properties } from '../store/our.model';
import { getCanvasUndostate } from '../store/our.selectors';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  canvas!: fabric.Canvas;
  public subject = new BehaviorSubject<string>('');
  undoselector$ = this.store.pipe(select(getCanvasUndostate));
  constructor(private store:Store<{canvasStore:' '}>
    ,private PropserviceService:PropserviceService) { 
      this.undoselector$.subscribe((data) => {
        if (data != null) {
          this.canvas.loadFromJSON(data, () => {});
        }
      });
    }
  eventHandler() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is added');
            }
        });
        this.canvas.on('object:modified',(options:any)=>{
         if(options["action"]=='rotate'){
                this.updatecanvas()
                this.getSelectedObjectsProperties();
             }
             if(options["action"]=='scale'){
                 this.updatecanvas()
             }
             if(options["action"]=='drag'){
                this.updatecanvas()
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
          });

        this.canvas.on('selection:updated', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is selected');
            }
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
      this.PropserviceService.OnObjectSelected(currentprop);
     }
  }
  newprops(Properties:properties) {
    this.canvas.getActiveObject().set('strokeWidth', Properties.strokewidth);
    this.canvas.getActiveObject().set('fill', Properties.fillcolor);
    this.canvas.getActiveObject().set('stroke', Properties.strokecolor);
    this.canvas.getActiveObject().set('angle', Properties.objangle);
    this.canvas.renderAll();
      this.updatecanvas()
    
  }
  updatecanvas(){
     this.store.dispatch(new event_UpdateCanvas({eventstring:JSON.stringify(this.canvas),undotoggle:false}) ) 
  }
  updateRedo(){
    this.store.dispatch(new event_RedoElement({eventstring:JSON.stringify(this.canvas),undotoggle:true}) ) 
  }
  updateundo(){
    this.store.dispatch(new event_UndoElement({eventstring:JSON.stringify(this.canvas),undotoggle:true}))  
  }
}
