import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUpdateComponent } from './demo-update.component';

describe('DemoUpdateComponent', () => {
  let component: DemoUpdateComponent;
  let fixture: ComponentFixture<DemoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoUpdateComponent]
    });
    fixture = TestBed.createComponent(DemoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
