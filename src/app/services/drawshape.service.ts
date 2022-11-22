import { Injectable } from '@angular/core';
import {fabric} from 'fabric';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class DrawshapeService {
  public canvas:any;
  constructor(private eventservice:EventsService) { }
  drawRectangle() {
    let Rectangle = new fabric.Rect({
    left:Math.random() * this.canvas.width,
    top: Math.random() * this.canvas.height,
    fill: '#0000ff',
    width: 60,
    height: 30,
    strokeWidth:1,
    stroke:'#000000'
  });
    this.canvas.add(Rectangle)
    this.eventservice.updatecanvas()
    }
    drawTriangle() {
      let Triangle = new fabric.Triangle({
       width: 50,
       height: 70,
       fill: '#ffff00',
       left: Math.random() * this.canvas.width,
       top: Math.random() * this.canvas.height,
       strokeWidth:1,
       stroke:'#000000'
      });
       this.canvas.add(Triangle)
       this.eventservice.updatecanvas()
      }
      drawCircle() {
      let Circle = new fabric.Circle({
      radius: 40,
      fill: '#ff0000',
      left:Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height,
      strokeWidth:1,
      stroke:'#000000'
    });
     this.canvas.add(Circle)
     this.eventservice.updatecanvas()
      }
}
