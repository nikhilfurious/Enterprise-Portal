import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finance2Component } from './finance2.component';

describe('Finance2Component', () => {
  let component: Finance2Component;
  let fixture: ComponentFixture<Finance2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finance2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
