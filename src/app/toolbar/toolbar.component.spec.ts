import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from '../services/events.service';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let eventservice=jasmine.createSpyObj({UndoOperation:null})
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  let service:EventsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      providers:[{provide:EventsService,useValue:eventservice}]
    })
    
  });

  beforeEach(() => {
    //service=new EventsService();
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('UndoOperation', () => {
  //   let button =fixture.debugElement.nativeElement.querySelector('#undoOp');
  //   button.click();
  //  fixture.detectChanges();
  //  component.UndoOperation();
  //  expect (eventservice.updateundo).toHaveBeenCalled()
  // });
 

 

  // it('UndoOperation', () => {

  //   let funcspy = spyOn(component, 'UndoOperation').and.callThrough();
  //   let button =fixture.debugElement.nativeElement.querySelector('#undoOp');
  //   console.log(button);
  //   button.click();
  //   expect(funcspy).toHaveBeenCalled();

  // });
  // it('RedoOperation', () => {

  //   let funcspy = spyOn(component, 'RedoOperation').and.callThrough();
  //   let button =fixture.debugElement.nativeElement.querySelector('#redoOp');
  //   console.log(button);
  //   button.click();
  //   expect(funcspy).toHaveBeenCalled();

  // });

});
