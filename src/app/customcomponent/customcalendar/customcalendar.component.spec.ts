import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcalendarComponent } from './customcalendar.component';

describe('CustomcalendarComponent', () => {
  let component: CustomcalendarComponent;
  let fixture: ComponentFixture<CustomcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
