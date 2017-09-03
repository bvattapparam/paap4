import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatpaymentComponent } from './flatpayment.component';

describe('FlatpaymentComponent', () => {
  let component: FlatpaymentComponent;
  let fixture: ComponentFixture<FlatpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
