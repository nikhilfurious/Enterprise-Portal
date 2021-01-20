import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorLandingComponent } from './shopfloor-landing.component';

describe('ShopfloorLandingComponent', () => {
  let component: ShopfloorLandingComponent;
  let fixture: ComponentFixture<ShopfloorLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfloorLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfloorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
