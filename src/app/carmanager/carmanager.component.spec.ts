import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmanagerComponent } from './carmanager.component';

describe('CarmanagerComponent', () => {
  let component: CarmanagerComponent;
  let fixture: ComponentFixture<CarmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
