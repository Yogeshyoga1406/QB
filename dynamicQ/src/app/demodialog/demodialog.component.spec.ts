import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodialogComponent } from './demodialog.component';

describe('DemodialogComponent', () => {
  let component: DemodialogComponent;
  let fixture: ComponentFixture<DemodialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemodialogComponent]
    });
    fixture = TestBed.createComponent(DemodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
