import { Injectable,EventEmitter } from '@angular/core';
import {fabric} from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class DrawshapeService {
  public shape:any;
  public canvas:any;
  addshapetocanvasevent=new EventEmitter();
  constructor() { }
  drawRectangle() {
    this.shape = new fabric.Rect({
    left:Math.random() * this.canvas.width,
    top: Math.random() * this.canvas.height,
    fill: 'blue',
    width: 60,
    height: 30});
    this.canvas.add(this.shape)
    this.addshapetocanvasevent.emit({shape:this.shape,name:'Rectangle'})
    }
    drawTriangle() {
      this.shape = new fabric.Triangle({
       width: 50,
       height: 70,
       fill: 'yellow',
       left: Math.random() * this.canvas.width,
       top: Math.random() * this.canvas.height
      });
       this.canvas.add(this.shape)
       this.addshapetocanvasevent.emit({shape:this.shape,name:'Triangle'})
      }
      drawCircle() {
      this.shape = new fabric.Circle({
      radius: 40,
      fill: 'red',
      left:Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height});
     this.canvas.add(this.shape)
     this.addshapetocanvasevent.emit({shape:this.shape,name:'Circle'})
      }
}
