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
    (Properties) => {
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

  onPropChange(prop:string,value: string) {
    if(prop=='strokewidth'){
      this.PropertyPanelValues.strokewidth = Number(value);
      this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues);
    }
    else if(prop=='strokecolor'){
      this.PropertyPanelValues.strokecolor = value;
      this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues);
    }
    else if(prop=='fillcolor'){
      this.PropertyPanelValues.fillcolor = value;
      this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues);
    }
    else if(prop=='angle'){
      this.PropertyPanelValues.objangle = Number(value);
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
    }
  }
}
