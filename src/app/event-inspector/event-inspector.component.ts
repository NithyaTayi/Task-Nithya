import { Component, OnInit } from '@angular/core';
import { DrawshapeService } from '../services/drawshape.service';
import { EventsService } from '../services/events.service';
import {fabric} from 'fabric';
@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.css']
})
export class EventInspectorComponent implements OnInit {
  canvas:any
  text:any
  constructor(protected eventService:EventsService,
    protected drawshapeService:DrawshapeService)  { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('Rcanvas',{});
    this.drawshapeService.canvas=this.canvas;
       this.drawshapeService.addshapetocanvasevent.subscribe((response:any)=>{
          response.shape.on('added',()=>{
          response.event='Added';
          this.eventService.newEvent(response.event,response.name);
          console.log(response.event);
          this.text=response.event+' '+response.name
        });
        response.shape.on('rotating',()=>{
          response.event='Rotated';
          this.eventService.newEvent(response.event,response.name);
          console.log(response.event);
          this.text=response.event+' '+response.name
        });
        response.shape.on('moving',()=>{
          response.event='Translated';
          this.eventService.newEvent(response.event,response.name);
          console.log(response.event);
          this.text=response.event+' '+response.name
        });
        response.shape.on('scaled',()=>{
          response.event='Scaled';
          this.eventService.newEvent(response.event,response.name);
          console.log(response.event);
          this.text=response.event+' '+response.name
        });
        response.event='Added';
        console.log(response.event);
        this.text=response.event+' '+response.name
       });
  }


}
