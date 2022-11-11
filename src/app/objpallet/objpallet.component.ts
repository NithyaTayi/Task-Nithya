import { Component, OnInit } from '@angular/core';
import {fabric} from 'fabric';
import { DrawshapeService } from '../services/drawshape.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-objpallet',
  templateUrl: './objpallet.component.html',
  styleUrls: ['./objpallet.component.css']
})
export class ObjpalletComponent implements OnInit {
  canvas:any

  constructor(private drawshapeService:DrawshapeService,private eventservice:EventsService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('Rcanvas');
    this.drawshapeService.canvas=this.canvas;
    this.eventservice.canvas = this.canvas;
    this.eventservice.eventHandler();
  }
  drawRectangle() {
    this.drawshapeService.drawRectangle()
  }
  drawTriangle() {
    this.drawshapeService.drawTriangle()
  }
  drawCircle() {
    this.drawshapeService.drawCircle()
  }
}

