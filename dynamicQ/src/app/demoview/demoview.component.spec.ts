import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoviewComponent } from './demoview.component';

describe('DemoviewComponent', () => {
  let component: DemoviewComponent;
  let fixture: ComponentFixture<DemoviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoviewComponent]
    });
    fixture = TestBed.createComponent(DemoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
