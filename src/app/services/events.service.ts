import { Injectable,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  addevent = new EventEmitter();
  constructor() { }
  newEvent(event:String,shapeName:String){
    this.addevent.emit({event,shapeName});
  }
}
