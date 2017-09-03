import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanmanagerComponent } from './loanmanager.component';

describe('LoanmanagerComponent', () => {
  let component: LoanmanagerComponent;
  let fixture: ComponentFixture<LoanmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
