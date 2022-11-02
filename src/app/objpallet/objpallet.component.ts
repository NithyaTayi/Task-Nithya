import { Component, OnInit } from '@angular/core';
import {fabric} from 'fabric';
import { DrawshapeService } from '../services/drawshape.service';

@Component({
  selector: 'app-objpallet',
  templateUrl: './objpallet.component.html',
  styleUrls: ['./objpallet.component.css']
})
export class ObjpalletComponent implements OnInit {
  canvas:any

  constructor(protected drawshapeService:DrawshapeService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('Rcanvas');
    this.drawshapeService.canvas=this.canvas;
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

