import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finance4Component } from './finance4.component';

describe('Finance4Component', () => {
  let component: Finance4Component;
  let fixture: ComponentFixture<Finance4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finance4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
