import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finance1Component } from './finance1.component';

describe('Finance1Component', () => {
  let component: Finance1Component;
  let fixture: ComponentFixture<Finance1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finance1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
