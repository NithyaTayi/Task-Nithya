import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ObjpalletComponent } from './objpallet.component';
import {fabric} from 'fabric';
import { EventsService } from '../services/events.service';

describe('ObjpalletComponent', () => {
  let component: ObjpalletComponent;
  let fixture: ComponentFixture<ObjpalletComponent>;
  let service: EventsService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjpalletComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjpalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
  
  it('rectBtn', () => {
    let funcspy = spyOn(component, 'drawRectangle').and.callThrough();
    let button =fixture.debugElement.nativeElement.querySelector('#rectBtn');
    //console.log(button);
    button.click();
    expect(funcspy).toHaveBeenCalled();
  });
  it('triBtn', () => {
    let funcspy = spyOn(component, 'drawTriangle').and.callThrough();
    let button =fixture.debugElement.nativeElement.querySelector('#triBtn');
    //console.log(button);
    button.click();
    expect(funcspy).toHaveBeenCalled();
  });
  it('circleBtn', () => {
    let funcspy = spyOn(component, 'drawCircle').and.callThrough();
    let button =fixture.debugElement.nativeElement.querySelector('#circleBtn');
    //console.log(button);
    button.click();
    expect(funcspy).toHaveBeenCalled();
  });

  


  it('should call event service on scale an object ', () => {
    let service: EventsService;
    service = TestBed.inject(EventsService);
    let rectObject = {
      left: (component.canvas.width) * Math.random(),
      top: (component.canvas.height) * Math.random(),
      fill: '#0000ff',
      width: 60,
      height: 30,
      strokeWidth:1,
      stroke:'#000000'
    };
    let eventSpy = spyOn(service, 'eventHandler');
    let rect = new fabric.Rect(rectObject);
    component.ngOnInit();
    component.canvas.add(rect);
    component.canvas.setActiveObject(rect);
    let modEvent = {
      action: 'scale',
      target: service.canvas.getActiveObject(),
    };
    service.canvas.fire('object:scaled',modEvent);
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should call event service on drag an object ', () => {
    let service: EventsService;
    service = TestBed.inject(EventsService);
    let rectObject = {
      left: (component.canvas.width) * Math.random(),
      top: (component.canvas.height) * Math.random(),
      fill: '#0000ff',
      width: 60,
      height: 30,
      strokeWidth:1,
      stroke:'#000000'
    };
    let eventSpy = spyOn(service, 'eventHandler');
    let rect = new fabric.Rect(rectObject);
    component.ngOnInit();
    component.canvas.add(rect);
    component.canvas.setActiveObject(rect);
    let modEvent = {
      action: 'drag',
      target: service.canvas.getActiveObject(),
    };
    service.canvas.fire('object:modified',modEvent);
    expect(eventSpy).toHaveBeenCalled();
  });
  
});
