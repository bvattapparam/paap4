import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatmanagerComponent } from './flatmanager.component';

describe('FlatmanagerComponent', () => {
  let component: FlatmanagerComponent;
  let fixture: ComponentFixture<FlatmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
