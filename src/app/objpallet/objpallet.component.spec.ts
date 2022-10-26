import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjpalletComponent } from './objpallet.component';

describe('ObjpalletComponent', () => {
  let component: ObjpalletComponent;
  let fixture: ComponentFixture<ObjpalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjpalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjpalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
