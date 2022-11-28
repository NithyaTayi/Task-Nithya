import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ObjpalletComponent } from '../objpallet/objpallet.component';
import { AppComponent } from '../app.component';
import { EventsService } from './events.service';
import { BehaviorSubject } from 'rxjs';

import {fabric} from 'fabric';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [EventsService],

      providers: [provideMockStore({})],

    }).compileComponents();

  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    
    service = TestBed.inject(EventsService);
  });

  
//  it('to check the change',()=>{
//   const redodispatch=spyOn(service,'updateRedo').and.callThrough();
//   service.updateRedo();

//  })

// it('get selected props',()=>{
//   let fixture=TestBed.createComponent(AppComponent)
//   let component=fixture.debugElement.componentInstance
//   component.getSelectedObjectsProperties()
//   expect(component.getSelectedObjectsProperties).toEqual([])
// })
// it('to check event is selected',()=>{

// })








});
