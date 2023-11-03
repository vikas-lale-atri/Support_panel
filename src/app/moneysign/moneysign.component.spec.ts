import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneysignComponent } from './moneysign.component';

describe('MoneysignComponent', () => {
  let component: MoneysignComponent;
  let fixture: ComponentFixture<MoneysignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneysignComponent]
    });
    fixture = TestBed.createComponent(MoneysignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
