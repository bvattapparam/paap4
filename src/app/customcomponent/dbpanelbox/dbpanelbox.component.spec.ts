import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpanelboxComponent } from './dbpanelbox.component';

describe('DbpanelboxComponent', () => {
  let component: DbpanelboxComponent;
  let fixture: ComponentFixture<DbpanelboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbpanelboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbpanelboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
