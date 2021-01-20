import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainLandingComponent } from './maintain-landing.component';

describe('MaintainLandingComponent', () => {
  let component: MaintainLandingComponent;
  let fixture: ComponentFixture<MaintainLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
