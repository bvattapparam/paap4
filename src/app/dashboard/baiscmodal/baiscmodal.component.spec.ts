import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiscmodalComponent } from './baiscmodal.component';

describe('BaiscmodalComponent', () => {
  let component: BaiscmodalComponent;
  let fixture: ComponentFixture<BaiscmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiscmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiscmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
