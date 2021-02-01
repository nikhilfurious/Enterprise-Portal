import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOrderPendingComponent } from './prod-order-pending.component';

describe('ProdOrderPendingComponent', () => {
  let component: ProdOrderPendingComponent;
  let fixture: ComponentFixture<ProdOrderPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOrderPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOrderPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
