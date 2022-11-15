import { Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { event_updateRotate,event_updateScale,event_updateTranslate,event_updateAdd } from '../store/our.actions';
import { PropserviceService } from './propservice.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  canvas!: fabric.Canvas;
  public subject = new BehaviorSubject<string>('');
  constructor(private store:Store,private PropserviceService:PropserviceService) { }
  

  eventHandler() {
    //this.PropserviceService.canvas=this.canvas;
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        // object add
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is added');
                this.store.dispatch(event_updateAdd({model:{eventstring:JSON.stringify(this.canvas)}})) 
            }
        });
        //object modified
        this.canvas.on('object:modified',(options:any)=>{
            //console.log(options);
            //console.log(options["action"]);
         if(options["action"]=='rotate'){
                this.store.dispatch(event_updateRotate({model:{eventstring:JSON.stringify(this.canvas)}}))
             }
             if(options["action"]=='scale'){
                 this.store.dispatch(event_updateScale({model:{eventstring:JSON.stringify(this.canvas)}})) 
             }
             if(options["action"]=='drag'){
                 this.store.dispatch(event_updateTranslate({model:{eventstring:JSON.stringify(this.canvas)}}))
             }
        
    })
        //object translate
        this.canvas.on('object:moving', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is translated');
            }
            //this.PropserviceService.getSelectedObjectsProperties();
        });
        //object scale
        this.canvas.on('object:scaling', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is scaled');
            }
            //this.PropserviceService.getSelectedObjectsProperties();
        });
        //object rotate
        this.canvas.on('object:rotating', (options: any) => {
            if (options.target) {
                
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is rotated');
            }
            //console.log(this.canvas.getActiveObject())
            //console.log(this.PropserviceService.canvas+'propservice')
            //this.PropserviceService.getSelectedObjectsProperties();
        });

        this.canvas.on('selection:created', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is selected');
                console.log(options.target)
            }
            
            //console.log(this.canvas.getActiveObject())
            //console.log(this.PropserviceService.canvas+'propservice test')
            this.PropserviceService.getSelectedObjectsProperties();
          });

        this.canvas.on('selection:updated', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is selected');
            }

            this.PropserviceService.getSelectedObjectsProperties();
          });
          
          this.canvas.on('selection:cleared', (options: any) => {
            this.subject.next('No Object Is Selected');
            this.PropserviceService.DisablePropertyPanel()
          });
          
    }
    eventMessage(): Observable<string> {
      return this.subject.asObservable();
  }

}
