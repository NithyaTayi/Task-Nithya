import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { UndoRedoserviceService } from '../services/undo-redoservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private eventservice:EventsService,private undoRedoservice:UndoRedoserviceService) { 
    
    this.undoRedoservice.undoEnable().subscribe((data)=>{
    this.undoEnable = data;
  })
  this.undoRedoservice.redoEnable().subscribe((data)=>{
    this.redoEnable = data;
  })}

  ngOnInit(): void {
  }
  UndoOperation(){
    this.eventservice.updateundo()
  }
  RedoOperation(){
    this.eventservice.updateRedo()
  }

  undoEnable:boolean=false;
  redoEnable:boolean=false;
  
}

