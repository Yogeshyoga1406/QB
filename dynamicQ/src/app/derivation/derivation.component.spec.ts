import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivationComponent } from './derivation.component';

describe('DerivationComponent', () => {
  let component: DerivationComponent;
  let fixture: ComponentFixture<DerivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerivationComponent]
    });
    fixture = TestBed.createComponent(DerivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
