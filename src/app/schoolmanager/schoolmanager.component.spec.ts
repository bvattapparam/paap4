import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolmanagerComponent } from './schoolmanager.component';

describe('SchoolmanagerComponent', () => {
  let component: SchoolmanagerComponent;
  let fixture: ComponentFixture<SchoolmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
