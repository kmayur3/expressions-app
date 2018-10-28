import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOperatorComponent } from './select-operator.component';

describe('SelectOperatorComponent', () => {
  let component: SelectOperatorComponent;
  let fixture: ComponentFixture<SelectOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
