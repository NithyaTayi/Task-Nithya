import { Component, OnInit } from '@angular/core';
import { properties } from '../store/our.model';
import { PropserviceService } from '../services/propservice.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css']
})
export class PropertiesPanelComponent implements OnInit {
  isdisabled:boolean = this.PropserviceService.isdisabled; 

  constructor(private PropserviceService:PropserviceService,private eventservice:EventsService) {
     this.PropserviceService.subjectforProp$.subscribe(
    (Properties) => {console.log(Properties+' properties')
      this.eventservice.newprops(Properties),
      this.PropertyPanelValues.strokewidth=Properties.strokewidth
      this.PropertyPanelValues.strokecolor=Properties.strokecolor
      this.PropertyPanelValues.objangle=Properties.objangle
      this.PropertyPanelValues.fillcolor=Properties.fillcolor
      this.PropertyPanelValues.isdisabled=Properties.isdisabled
    });
  }
  ngOnInit(): void { }
  PropertyPanelValues: properties = {
    strokewidth: 1,
    strokecolor: '#999999',
    fillcolor: '#145697',
    objangle: 0,
    isdisabled:false
  };

  thumbLabel = true;

  onSliderChange(value: number) {
    this.PropertyPanelValues.strokewidth = (value);
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
    
  }
  onStrokeColorChange(value: string) {
    this.PropertyPanelValues.strokecolor = value;
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  }

  onFillColorChange(value: string) {
    this.PropertyPanelValues.fillcolor = value;
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  }
  onAngleChange(value:string) {
    this.PropertyPanelValues.objangle = Number(value);
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  
  }


  

}
