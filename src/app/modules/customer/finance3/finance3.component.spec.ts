import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finance3Component } from './finance3.component';

describe('Finance3Component', () => {
  let component: Finance3Component;
  let fixture: ComponentFixture<Finance3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finance3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finance3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
