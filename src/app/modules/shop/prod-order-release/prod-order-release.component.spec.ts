import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOrderReleaseComponent } from './prod-order-release.component';

describe('ProdOrderReleaseComponent', () => {
  let component: ProdOrderReleaseComponent;
  let fixture: ComponentFixture<ProdOrderReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOrderReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOrderReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
