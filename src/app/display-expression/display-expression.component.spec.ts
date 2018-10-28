import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExpressionComponent } from './display-expression.component';

describe('DisplayExpressionComponent', () => {
  let component: DisplayExpressionComponent;
  let fixture: ComponentFixture<DisplayExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
