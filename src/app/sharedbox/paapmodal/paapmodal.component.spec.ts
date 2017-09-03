import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaapmodalComponent } from './paapmodal.component';

describe('PaapmodalComponent', () => {
  let component: PaapmodalComponent;
  let fixture: ComponentFixture<PaapmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaapmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaapmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
