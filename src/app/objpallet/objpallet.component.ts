import { Component, OnInit } from '@angular/core';
import {fabric} from 'fabric';
@Component({
  selector: 'app-objpallet',
  templateUrl: './objpallet.component.html',
  styleUrls: ['./objpallet.component.css']
})
export class ObjpalletComponent implements OnInit {
  canvas:any

  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('Rcanvas');
  }
drawRectangle() {
   var rect = new fabric.Rect({
left:Math.random() * this.canvas.width,
 top: Math.random() * this.canvas.height,
fill: 'blue',
 width: 60,
 height: 30
 });
 this.canvas.add(rect)
 }
 drawTriangle() {
 var triangle = new fabric.Triangle({
  width: 50,
  height: 70,
  fill: 'yellow',
  left: Math.random() * this.canvas.width,
  top: Math.random() * this.canvas.height
 });
  this.canvas.add(triangle);
 }
 drawCircle() {
 var circle = new fabric.Circle({
 radius: 40,
 fill: 'red',
 left:Math.random() * this.canvas.width,
 top: Math.random() * this.canvas.height
 });
this.canvas.add(circle);
 }

}

