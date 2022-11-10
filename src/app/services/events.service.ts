import { Injectable} from '@angular/core';
import { props, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { event_updated } from '../store/our.actions';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  canvas!: fabric.Canvas;
  public subject = new BehaviorSubject<string>('');
  constructor(private store:Store) { }

  updatedcanvas(){
    this.store.dispatch(event_updated({model:{eventstring:JSON.stringify(this.canvas)}})) 
}

  eventHandler() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        // object add
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + 'is added');
                this.updatedcanvas()
            }
        });
        //object translate
        this.canvas.on('object:moving', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is translated');
            }
        });
        //object scale
        this.canvas.on('object:scaling', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is scaled');
            }
        });
        //object rotate
        this.canvas.on('object:rotating', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' is rotated');
            }
        });
    }
    eventMessage(): Observable<string> {
      return this.subject.asObservable();
  }
}
