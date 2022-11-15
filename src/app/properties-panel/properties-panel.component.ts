import { Component, OnInit } from '@angular/core';
import { properties } from '../store/our.model';
import { PropserviceService } from '../services/propservice.service';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css']
})
export class PropertiesPanelComponent implements OnInit {
  isdisabled: boolean = this.PropserviceService.isdisabled;

  constructor(private PropserviceService:PropserviceService) {
     this.PropserviceService.subjectforProp$.subscribe(
    (Properties) => {console.log(Properties+' properties')
      this.PropserviceService.newprops(Properties),
      this.PropertyPanelValues.strokewidth=Properties.strokewidth
      this.PropertyPanelValues.strokecolor=Properties.strokecolor
      this.PropertyPanelValues.objangle=Properties.objangle
      this.PropertyPanelValues.fillcolor=Properties.fillcolor


      
    }
  );
//   this.PropserviceService.subjectforProp$.subscribe(() =>
//   this.PropserviceService.DisablePropertyPanel()
// );


      // this.PropserviceService.setMessage().subscribe(
      //   (Properties) => {console.log(Properties+' setmessage')
      // this.PropserviceService.newprops(Properties)}
      // )
}
  


  ngOnInit(): void {
    //this.PropserviceService.getSelectedObjectsProperties()
  }
  PropertyPanelValues: properties = {
    strokewidth: 1,
    strokecolor: '#999999',
    fillcolor: '#145697',
    objangle: 0
  };
  
  

  thumbLabel = true;

  onSliderChange(value: number) {
    //console.log(value);
    this.PropertyPanelValues.strokewidth = (value);
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
    
  }
  onStrokeColorChange(value: string) {
    //console.log(value);
    this.PropertyPanelValues.strokecolor = value;
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  }

  onFillColorChange(value: string) {
    //console.log(value);
    this.PropertyPanelValues.fillcolor = value;
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  }
  onAngleChange(value:string) {
    //console.log(value);
    this.PropertyPanelValues.objangle = Number(value);
    this.PropserviceService.onPropertyPanelChange(this.PropertyPanelValues)
  
  }


  

}
