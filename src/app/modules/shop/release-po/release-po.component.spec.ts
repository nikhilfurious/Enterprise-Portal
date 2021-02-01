import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePoComponent } from './release-po.component';

describe('ReleasePoComponent', () => {
  let component: ReleasePoComponent;
  let fixture: ComponentFixture<ReleasePoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasePoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
