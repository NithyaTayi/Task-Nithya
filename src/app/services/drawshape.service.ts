import { Injectable,EventEmitter } from '@angular/core';
import {fabric} from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class DrawshapeService {
  //public shape:any;
  public canvas:any;
  addshapetocanvasevent=new EventEmitter();
  constructor() { }
  drawRectangle() {
    let Rectangle = new fabric.Rect({
    left:Math.random() * this.canvas.width,
    top: Math.random() * this.canvas.height,
    fill: 'blue',
    width: 60,
    height: 30});
    this.canvas.add(Rectangle)
    }
    drawTriangle() {
      let Triangle = new fabric.Triangle({
       width: 50,
       height: 70,
       fill: 'yellow',
       left: Math.random() * this.canvas.width,
       top: Math.random() * this.canvas.height
      });
       this.canvas.add(Triangle)
      }
      drawCircle() {
      let Circle = new fabric.Circle({
      radius: 40,
      fill: 'red',
      left:Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height});
     this.canvas.add(Circle)
      }
}
