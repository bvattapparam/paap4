import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasmanagerComponent } from './gasmanager.component';

describe('GasmanagerComponent', () => {
  let component: GasmanagerComponent;
  let fixture: ComponentFixture<GasmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
